self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("thepanicroom").then(function(cache) {
      return cache.addAll([
        "/_site/",
        "/_site/index.html",
        "/_site/index.html?homescreen=1",
        "/_site/assets/css/style.css",
        "/_site/assets/css/bootstrap.min.css",
        "/_site/assets/js/bootstrap.min.js",
        "/_site/assets/js/popper.min.js",
        "/_site/assets/js/jquery-3.4.1.min.js",
        "/_site/assets/images/bg-mobile.webp",
        "/_site/assets/images/bg.webp",
        "/_site/assets/images/facebook.svg",
        "/_site/assets/images/github.svg",
        "/_site/assets/images/instagram.svg",
        "/_site/assets/images/linkedin.svg",
        "/_site/assets/images/telegram.webp",
        "/_site/assets/images/tpr.webp",
        "/_site/assets/images/whatsapp.webp",
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
