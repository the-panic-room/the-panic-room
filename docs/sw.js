self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("thepanicroom").then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/index.html?homescreen=1",
        "/?homescreen=1",
        "/assets/css/style.min.css",
        "/assets/bootstrap-4.3.1-dist/css/bootstrap.min.css",
        "/assets/bootstrap-4.3.1-dist/js/bootstrap.bundle.min.js",
        "/assets/jquery-3.4.1-dist/jquery-3.4.1.min.js",
        "/assets/images/bg-mobile.webp",
        "/assets/images/bg.webp",
        "/assets/images/facebook.svg",
        "/assets/images/github.svg",
        "/assets/images/instagram.svg",
        "/assets/images/linkedin.svg",
        "/assets/images/telegram.webp",
        "/assets/images/tpr.webp",
        "/assets/images/whatsapp.webp"
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
