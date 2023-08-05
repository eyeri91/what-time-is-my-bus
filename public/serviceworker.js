const CACHE_NAME = "version-1";
const urlsToCache = [
  "/",
  "build/serviceworker.js",
  "build/index.html",
  "build/static/css/main.708debf8.css",
  "build/static/js/main.9742be81.js",
  "build/static/media/aircraftImg.8656fdf035f9f62119a2.jpg",
  "build/images/maskable_icon_x512.png",
  "build/images/bus-stop-192.png",
  "public/fallback.html",
];

const self = this;

// Install SW
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((cacheRequest) => {
        return cacheRequest || fetch(e.request);
      })
      .catch(() => caches.match("public/fallback.html"))
  );
});

// Activate the SW
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  e.waitUntil(
    caches.keys().then((cacheNames) => {
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
