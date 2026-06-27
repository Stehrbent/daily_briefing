const CACHE = "dailybrief-v1";
const ASSETS = ["/", "/index.html", "/manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  // For API calls (news fetch), always go network-first
  if (e.request.url.includes("rss2json.com")) {
    e.respondWith(
      fetch(e.request).catch(() =>
        new Response(JSON.stringify({ status: "error", items: [] }), {
          headers: { "Content-Type": "application/json" }
        })
      )
    );
    return;
  }

  // For app shell, serve from cache first
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
