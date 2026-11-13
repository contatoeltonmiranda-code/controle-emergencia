// Sincronização opcional com o Supabase (Auth + REST via fetch, sem dependências).
// O estado local é sempre a fonte primária: este módulo só registra o que mudou,
// guarda uma fila de pendentes e faz merge last-write-wins por chave.
(function (global) {
  'use strict';

  var PREFIXO = 'controle-emergencia:';
  var K_SYNC = PREFIXO + 'sync';
  var K_SESSAO = PREFIXO + 'sessao';
  var TABELA = 'emergencia_estado';
  var LOTE = 200;
  var PAGINA = 1000;
  var RE_CHAVE = /^[A-Za-z0-9_:.-]{1,120}$/;
  var RE_UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  function mapa() { return Object.create(null); }

  function lerJson(chave) {
    try { return JSON.parse(localStorage.getItem(chave)); } catch (e) { return null; }
  }

  function gravarJson(chave, valor) {
    try { localStorage.setItem(chave, JSON.stringify(valor)); return true; } catch (e) { return false; }
  }

  function falhaRede() { var e = new Error('rede'); e.rede = true; return e; }
  function falhaAuth() { var e = new Error('auth'); e.auth = true; return e; }
  // 402 = projeto Supabase restrito pelo plano (cota de egress): não é erro do app nem das credenciais
  function falhaHttp(r) { var e = new Error('http ' + r.status); if (r.status === 402) { e.indisponivel = true; } return e; }

  global.CriarSync = function (cfg) {
    var URL_BASE = cfg.url;
    var ANON = cfg.anon;
    var persistido = lerJson(K_SYNC) || {};
    var meta = mapa();
    var vals = mapa();
    var pend = mapa();
    var iniciado = persistido.iniciado === true;
    var conta = typeof persistido.conta === 'string' && RE_UUID.test(persistido.conta) ? persistido.conta : null;
    if (persistido.meta && typeof persistido.meta === 'object') {
      Object.keys(persistido.meta).forEach(function (k) {
        var m = persistido.meta[k];
        if (RE_CHAVE.test(k) && m && typeof m.t === 'number' && isFinite(m.t) && m.t >= 0) { meta[k] = { t: m.t, d: m.d === true }; }
      });
    }
    if (persistido.vals && typeof persistido.vals === 'object') {
      Object.keys(persistido.vals).forEach(function (k) { if (meta[k] && !meta[k].d) { vals[k] = persistido.vals[k]; } });
    }
    if (Array.isArray(persistido.pend)) {
      persistido.pend.forEach(function (k) { if (meta[k]) { pend[k] = true; } });
    }

    var sessao = lerSessao();
    var fase = sessao ? 'ok' : 'local';
    var erroTexto = '';
    var rodando = null;
    var denovo = false;
    var ultimoInicio = 0;
    var timerAgenda = null;
    var timerRetenta = null;
    var intervalo = null;
    var ligado = false;

    function lerSessao() {
      var s = lerJson(K_SESSAO);
      if (!s || typeof s !== 'object') { return null; }
      if (typeof s.access_token !== 'string' || typeof s.refresh_token !== 'string' || typeof s.expires_at !== 'number') { return null; }
      if (!s.user || typeof s.user.id !== 'string' || !RE_UUID.test(s.user.id)) { return null; }
      return { access_token: s.access_token, refresh_token: s.refresh_token, expires_at: s.expires_at, user: { id: s.user.id, email: String(s.user.email || '') } };
    }

    function gravarSessao() {
      if (sessao) { gravarJson(K_SESSAO, sessao); } else { try { localStorage.removeItem(K_SESSAO); } catch (e) { /* sem storage */ } }
    }

    function persistir() {
      gravarJson(K_SYNC, { v: 1, conta: conta, iniciado: iniciado, meta: meta, vals: vals, pend: Object.keys(pend) });
    }

    function contarPend() { return Object.keys(pend).length; }

    function estadoAtual() {
      var n = contarPend();
      var f = fase;
      if (sessao && (f === 'ok') && n > 0) { f = 'pendente'; }
      return { fase: f, pendentes: n, email: sessao ? sessao.user.email : '', logado: !!sessao, erro: erroTexto };
    }

    function definirFase(nova, erro) {
      fase = nova;
      erroTexto = erro || '';
      if (cfg.aoMudar) { cfg.aoMudar(estadoAtual()); }
    }

    function iguais(a, b) { return JSON.stringify(a) === JSON.stringify(b); }

    function carimbar(k, apagado, agora) {
      var t = Math.max(agora, (meta[k] ? meta[k].t : 0) + 1);
      meta[k] = { t: t, d: apagado };
      pend[k] = true;
    }

    // Compara a projeção atual do app com a última conhecida e carimba o que mudou.
    function registrar() {
      var atual = cfg.projetar();
      var agora = Date.now();
      var mudou = false;
      if (!iniciado) {
        // estado que já existia antes da sincronização: t=1 (perde para qualquer edição real)
        Object.keys(atual).forEach(function (k) { meta[k] = { t: 1, d: false }; vals[k] = atual[k]; pend[k] = true; });
        iniciado = true;
        persistir();
        if (cfg.aoMudar) { cfg.aoMudar(estadoAtual()); }
        return true;
      }
      Object.keys(atual).forEach(function (k) {
        if (!(k in vals) || !iguais(vals[k], atual[k])) { carimbar(k, false, agora); vals[k] = atual[k]; mudou = true; }
      });
      Object.keys(vals).forEach(function (k) {
        if (!(k in atual)) { carimbar(k, true, agora); delete vals[k]; mudou = true; }
      });
      if (mudou) {
        persistir();
        if (cfg.aoMudar) { cfg.aoMudar(estadoAtual()); }
        agendar();
      }
      return mudou;
    }

    // ---------- rede ----------
    function cabecalhos(extra, comToken) {
      var h = { apikey: ANON, 'Content-Type': 'application/json' };
      h.Authorization = 'Bearer ' + (comToken && sessao ? sessao.access_token : ANON);
      Object.keys(extra || {}).forEach(function (k) { h[k] = extra[k]; });
      return h;
    }

    function chamar(caminho, opc) {
      return fetch(URL_BASE + caminho, opc).catch(function () { throw falhaRede(); });
    }

    function guardarSessao(j) {
      if (!j || typeof j.access_token !== 'string' || typeof j.refresh_token !== 'string' || !j.user || !RE_UUID.test(String(j.user.id))) { return false; }
      var exp = typeof j.expires_at === 'number' ? j.expires_at : Math.floor(Date.now() / 1000) + (Number(j.expires_in) || 3600);
      sessao = { access_token: j.access_token, refresh_token: j.refresh_token, expires_at: exp, user: { id: j.user.id, email: String(j.user.email || '') } };
      gravarSessao();
      return true;
    }

    function renovar() {
      if (!sessao) { return Promise.reject(falhaAuth()); }
      return chamar('/auth/v1/token?grant_type=refresh_token', {
        method: 'POST', headers: cabecalhos({}, false), body: JSON.stringify({ refresh_token: sessao.refresh_token })
      }).then(function (r) {
        if (r.status === 400 || r.status === 401 || r.status === 403) { sessao = null; gravarSessao(); throw falhaAuth(); }
        if (!r.ok) { throw falhaHttp(r); }
        return r.json();
      }).then(function (j) {
        if (!guardarSessao(j)) { throw new Error('resposta inválida'); }
      });
    }

    function garantirToken() {
      if (!sessao) { return Promise.reject(falhaAuth()); }
      if (sessao.expires_at - 60 > Date.now() / 1000) { return Promise.resolve(); }
      return renovar();
    }

    // requisição autenticada com uma renovação em caso de 401
    function autenticada(caminho, opc, tentou) {
      var o = { method: opc.method, headers: cabecalhos(opc.headers, true), body: opc.body };
      return chamar(caminho, o).then(function (r) {
        if (r.status === 401 && !tentou) { return renovar().then(function () { return autenticada(caminho, opc, true); }); }
        if (r.status === 401) { throw falhaAuth(); }
        return r;
      });
    }

    function puxar() {
      var linhas = [];
      function pagina(offset) {
        var q = '/rest/v1/' + TABELA + '?select=chave,valor,updated_at,deleted&user_id=eq.' + sessao.user.id + '&order=chave.asc&limit=' + PAGINA + '&offset=' + offset;
        return autenticada(q, { method: 'GET', headers: {} }).then(function (r) {
          if (!r.ok) { throw falhaHttp(r); }
          return r.json();
        }).then(function (lote) {
          if (!Array.isArray(lote)) { throw new Error('resposta inválida'); }
          linhas = linhas.concat(lote);
          return lote.length >= PAGINA ? pagina(offset + PAGINA) : linhas;
        });
      }
      return pagina(0);
    }

    // ---------- merge ----------
    function mesclar(linhas, primeiro) {
      var remotos = mapa();
      linhas.forEach(function (r) {
        if (!r || typeof r.chave !== 'string' || !RE_CHAVE.test(r.chave)) { return; }
        var t = Date.parse(r.updated_at);
        if (isNaN(t)) { return; }
        var d = r.deleted === true;
        if (!d && !cfg.validar(r.chave, r.valor)) { return; }
        remotos[r.chave] = { t: t, d: d, v: r.valor };
      });
      var mudouLocal = false;
      function adotar(k, r) {
        var tinha = k in vals;
        var antigo = vals[k];
        meta[k] = { t: r.t, d: r.d };
        delete pend[k];
        if (r.d) { if (tinha) { delete vals[k]; mudouLocal = true; } }
        else if (!tinha || !iguais(antigo, r.v)) { vals[k] = r.v; mudouLocal = true; }
      }
      Object.keys(remotos).forEach(function (k) {
        var r = remotos[k];
        var l = meta[k];
        if (!l) { adotar(k, r); }
        else if (primeiro && !l.d && r.d) { meta[k] = { t: Math.max(l.t, r.t) + 1, d: false }; pend[k] = true; }
        else if (r.t > l.t) { adotar(k, r); }
        else if (r.t < l.t) { pend[k] = true; }
        else { delete pend[k]; }
      });
      Object.keys(meta).forEach(function (k) { if (!remotos[k]) { pend[k] = true; } });
      if (mudouLocal) {
        cfg.aplicar(vals);
        var real = cfg.projetar();
        Object.keys(vals).forEach(function (k) { if (!(k in real)) { delete vals[k]; } });
      }
      return mudouLocal;
    }

    function empurrar() {
      var enviadas = [];
      Object.keys(pend).forEach(function (k) {
        var m = meta[k];
        if (!m || (!m.d && !(k in vals))) { delete pend[k]; return; }
        enviadas.push({ k: k, t: m.t, linha: { user_id: sessao.user.id, chave: k, valor: m.d ? null : vals[k], updated_at: new Date(m.t).toISOString(), deleted: m.d } });
      });
      var seq = Promise.resolve();
      for (var i = 0; i < enviadas.length; i += LOTE) {
        (function (lote) {
          seq = seq.then(function () {
            return autenticada('/rest/v1/' + TABELA + '?on_conflict=user_id,chave', {
              method: 'POST',
              headers: { Prefer: 'resolution=merge-duplicates,return=minimal' },
              body: JSON.stringify(lote.map(function (x) { return x.linha; }))
            }).then(function (r) {
              if (!r.ok) { throw falhaHttp(r); }
              lote.forEach(function (x) { if (meta[x.k] && meta[x.k].t === x.t) { delete pend[x.k]; } });
            });
          });
        })(enviadas.slice(i, i + LOTE));
      }
      return seq;
    }

    // ---------- ciclo ----------
    function sincronizar() {
      if (!sessao) { definirFase('local'); return Promise.resolve(); }
      if (rodando) { denovo = true; return rodando; }
      if (typeof navigator !== 'undefined' && navigator.onLine === false) { definirFase('offline'); return Promise.resolve(); }
      ultimoInicio = Date.now();
      definirFase('sincronizando');
      rodando = garantirToken().then(puxar).then(function (linhas) {
        var primeiro = conta !== sessao.user.id;
        mesclar(linhas, primeiro);
        conta = sessao.user.id;
        persistir();
        return empurrar();
      }).then(function () {
        persistir();
        definirFase('ok');
      }).catch(function (e) {
        persistir();
        if (e && e.rede) { definirFase('offline'); retentar(); }
        else if (e && e.auth) { definirFase('expirada'); }
        else if (e && e.indisponivel) { definirFase('erro', 'indisponivel'); }
        else { definirFase('erro', 'falha'); }
      }).then(function () {
        rodando = null;
        if (denovo) { denovo = false; setTimeout(sincronizar, 0); }
      });
      return rodando;
    }

    // rede caiu no meio (sem evento "online" confiável, ex.: portal cativo): tenta de novo em 15 s
    function retentar() {
      clearTimeout(timerRetenta);
      timerRetenta = setTimeout(function () { if (document.visibilityState !== 'hidden') { sincronizar(); } }, 15000);
    }

    function agendar() {
      if (!sessao || !ligado) { return; }
      clearTimeout(timerAgenda);
      timerAgenda = setTimeout(sincronizar, 1500);
    }

    function aoVoltarAoApp() {
      if (document.visibilityState === 'hidden') { return; }
      if (Date.now() - ultimoInicio < 3000) { return; }
      sincronizar();
    }

    function ligar() {
      if (ligado) { return; }
      ligado = true;
      global.addEventListener('online', function () { sincronizar(); });
      global.addEventListener('offline', function () { if (sessao) { definirFase('offline'); } });
      global.addEventListener('focus', aoVoltarAoApp);
      document.addEventListener('visibilitychange', aoVoltarAoApp);
      intervalo = setInterval(function () { if (document.visibilityState !== 'hidden') { sincronizar(); } }, 60000);
      if (sessao) { sincronizar(); } else { definirFase('local'); }
    }

    // ---------- login ----------
    function entrar(email, senha) {
      return chamar('/auth/v1/token?grant_type=password', {
        method: 'POST', headers: cabecalhos({}, false), body: JSON.stringify({ email: email, password: senha })
      }).then(function (r) {
        if (r.status === 400 || r.status === 401 || r.status === 422) { return { ok: false, erro: 'E-mail ou senha incorretos.' }; }
        if (r.status === 402) { return { ok: false, erro: 'Serviço de sincronização indisponível no momento. Tente mais tarde.' }; }
        if (r.status === 429) { return { ok: false, erro: 'Muitas tentativas. Aguarde um pouco e tente de novo.' }; }
        if (!r.ok) { return { ok: false, erro: 'Não foi possível entrar agora. Tente de novo.' }; }
        return r.json().then(function (j) {
          if (!guardarSessao(j)) { return { ok: false, erro: 'Não foi possível entrar agora. Tente de novo.' }; }
          definirFase('ok');
          sincronizar();
          return { ok: true };
        });
      }, function () { return { ok: false, erro: 'Sem conexão. Entre quando estiver online.' }; })
        .catch(function () { return { ok: false, erro: 'Sem conexão. Entre quando estiver online.' }; });
    }

    function sair() {
      var s = sessao;
      sessao = null;
      gravarSessao();
      clearTimeout(timerAgenda);
      definirFase('local');
      if (s) {
        fetch(URL_BASE + '/auth/v1/logout?scope=local', { method: 'POST', headers: { apikey: ANON, Authorization: 'Bearer ' + s.access_token } }).catch(function () { /* offline: a sessão local já foi apagada */ });
      }
    }

    return {
      registrar: registrar,
      sincronizar: sincronizar,
      entrar: entrar,
      sair: sair,
      ligar: ligar,
      estado: estadoAtual
    };
  };
})(window);
