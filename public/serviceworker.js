const CACH_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACH_NAME)
            .then((cache) => {
                console.log('opened Cache')
                return cache.addAll(urlsToCache);
            })
    )
})

self.addEventListener('fetch', (event) => {
    console.log('fetch')
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('offline.html'))
            })
    )
})

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACH_NAME);

    event.waitUntil(
        caches.keys()
            .then((cacheNames) => Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName))
                        return caches.delete(cacheName);
                })
            ))
    )
})