# Controle de Emergência

PWA pessoal: checklists de preparação e guia de conhecimento. Funciona offline, instala no Android e sincroniza entre aparelhos (opcional, login por e-mail e senha).

App: https://contatoeltonmiranda-code.github.io/controle-emergencia/

- Estado local primeiro (localStorage); sem login tudo funciona neste aparelho.
- Sincronização por chave (last-write-wins) com Supabase, protegida por RLS.
- Este repositório contém apenas os arquivos publicados (gerados por build). A chave pública (anon) do Supabase é intencionalmente pública; nenhuma chave secreta fica aqui.
