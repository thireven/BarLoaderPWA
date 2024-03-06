const cacheName = 'barloader-cache';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(
        [
          '/style.css?v=20240305',
          '/script.js?v=20240305',
          '/vendor/cash.min.js',
          '/vendor/draggable.min.js',
          '/index.html?v=20240305'
        ]
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(cacheName).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function (response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
