var version = '1.0.0';
var cacheName = 'panicroom-' + version;
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/services.html",
        "/blog.html",
        "/developers.html",
        "/contact.html",
        "/privacity.html",
        "/term.html",
        "/assets/css/bootstrap.min.css",
        "/assets/css/style.css",
        "/assets/css/icons.css",
        "/assets/js/bootstrap.min.js",
        "/assets/js/popper.min.js",
        "/assets/js/jquery-3.4.1.min.js",
        "/assets/js/moment.js",
        "/assets/js/search.js",
        "/assets/js/utils.js",
        "/search.json",
        "/assets/images/bg-mobile.png",
        "/assets/images/bg-mobile.webp",
        "/assets/images/bg.png",
        "/assets/images/bg.webp",
        "/assets/images/facebook.svg",
        "/assets/images/github.svg",
        "/assets/images/instagram.svg",
        "/assets/images/linkedin.svg",
        "/assets/images/telegram.webp",
        "/assets/images/tpr.png",
        "/assets/images/tpr.webp",
        "/assets/images/whatsapp.png",
        "/assets/images/whatsapp.webp",
      ])
        .then(function () {
          self.skipWaiting();
        });
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  if (event.request && event.request.method === 'GET') {
    event.respondWith(
      caches.open(cacheName)
        .then(function(cache) {
          return cache.match(event.request)
            .then(function (response) {
              return response || fetch(event.request).then(function(response) {
                cache.put(event.request, response.clone());
                return response;
              });
            })
        })
    );
  }
});
