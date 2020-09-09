---
sitemap:
  exclude: 'yes'
---
var version = '1.0.0';
var cacheName = 'panicroom-' + version;
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll([
        "{{'/' | prepend: site.baseurl }}",
        "{{'/index.html' | prepend: site.baseurl }}",
        "{{'/services.html' | prepend: site.baseurl }}",
        "{{'/developers.html' | prepend: site.baseurl }}",
        "{{'/contact.html' | prepend: site.baseurl }}",
        "{{'/privacity.html' | prepend: site.baseurl }}",
        "{{'/term.html' | prepend: site.baseurl }}",
        "{{'/assets/css/bootstrap.min.css' | prepend: site.baseurl }}",
        "{{'/assets/css/style.css' | prepend: site.baseurl }}",
        "{{'/assets/css/icons.css' | prepend: site.baseurl }}",
        "{{'/assets/js/bootstrap.min.js' | prepend: site.baseurl }}",
        "{{'/assets/js/popper.min.js' | prepend: site.baseurl }}",
        "{{'/assets/js/jquery-3.4.1.min.js' | prepend: site.baseurl }}",
        "{{'/assets/js/moment.js' | prepend: site.baseurl }}",
        "{{'/assets/js/search.js' | prepend: site.baseurl }}",
        "{{'/assets/js/utils.js' | prepend: site.baseurl }}",
        "{{'/search.json' | prepend: site.baseurl }}",
        "{{'/assets/images/bg-mobile.png' | prepend: site.baseurl }}",
        "{{'/assets/images/bg-mobile.webp' | prepend: site.baseurl }}",
        "{{'/assets/images/bg.png' | prepend: site.baseurl }}",
        "{{'/assets/images/bg.webp' | prepend: site.baseurl }}",
        "{{'/assets/images/facebook.svg' | prepend: site.baseurl }}",
        "{{'/assets/images/github.svg' | prepend: site.baseurl }}",
        "{{'/assets/images/instagram.svg' | prepend: site.baseurl }}",
        "{{'/assets/images/linkedin.svg' | prepend: site.baseurl }}",
        "{{'/assets/images/telegram.webp' | prepend: site.baseurl }}",
        "{{'/assets/images/tpr.png' | prepend: site.baseurl }}",
        "{{'/assets/images/tpr.webp' | prepend: site.baseurl }}",
        "{{'/assets/images/whatsapp.png' | prepend: site.baseurl }}",
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
