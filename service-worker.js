self.addEventListener("install", (event) => {
    console.log("Service Worker Installed");
    event.waitUntil(
        caches.open("tts-cache").then((cache) => {
            return cache.addAll([
                "/speech/",
                "/speech/index.html",
                "/speech/manifest.json",
                "/speech/style.css",
                "/speech/script.js",
                "/speech/icons/icon-192x192.png",
                "/speech/icons/icon-512x512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
