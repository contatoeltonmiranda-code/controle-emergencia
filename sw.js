'use strict';

// Gerado por scripts/build-data.mjs: a versão muda quando qualquer arquivo do app muda.
var VERSAO = '37845cd42b';
var CACHE = 'controle-emergencia-' + VERSAO;
var ARQUIVOS = ["./","app.css","app.js","manifest.webmanifest","sync.js","index.html","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","icons/maskable-192.png","icons/maskable-512.png"];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return c.addAll(ARQUIVOS.map(function (u) { return new Request(u, { cache: 'reload' }); }));
  }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (nomes) {
    return Promise.all(nomes.filter(function (n) { return n.indexOf('controle-emergencia-') === 0 && n !== CACHE; }).map(function (n) { return caches.delete(n); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('message', function (e) {
  if (e.data === 'PULAR_ESPERA') { self.skipWaiting(); }
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') { return; }
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) { return; }
  e.respondWith(caches.open(CACHE).then(function (c) {
    return c.match(req, { ignoreSearch: true }).then(function (achado) {
      if (achado) { return achado; }
      if (req.mode === 'navigate') { return c.match('index.html'); }
      return fetch(req);
    });
  }));
});
