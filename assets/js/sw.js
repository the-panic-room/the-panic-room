---
sitemap:
  exclude: 'yes'
---
var version = '0.0.1';
var cacheName = 'panicroom-' + version;
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        "{{'/' | prepend: site.baseurl }}",
        "{{'/index.html' | prepend: site.baseurl }}",
        "{{'/assets/css/style.css' | prepend: site.baseurl }}",
        "{{'/assets/css/bootstrap.min.css' | prepend: site.baseurl }}",
        "{{'/assets/js/bootstrap.min.js' | prepend: site.baseurl }}",
        "{{'/assets/js/popper.min.js' | prepend: site.baseurl }}",
        "{{'/assets/js/jquery-3.4.1.min.js' | prepend: site.baseurl }}",
        "{{'/assets/js/sw.js' | prepend: site.baseurl }}",
        "{{'/assets/images/bg-mobile.webp' | prepend: site.baseurl }}",
        "{{'/assets/images/bg.webp' | prepend: site.baseurl }}",
        "{{'/assets/images/facebook.svg' | prepend: site.baseurl }}",
        "{{'/assets/images/github.svg' | prepend: site.baseurl }}",
        "{{'/assets/images/instagram.svg' | prepend: site.baseurl }}",
        "{{'/assets/images/linkedin.svg' | prepend: site.baseurl }}",
        "{{'/assets/images/telegram.webp' | prepend: site.baseurl }}",
        "{{'/assets/images/tpr.webp' | prepend: site.baseurl }}",
        "{{'/assets/images/whatsapp.webp' | prepend: site.baseurl }}",
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
  console.log(event);
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
});
