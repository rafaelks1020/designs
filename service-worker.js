const CACHE_NAME = 'ieadmi-gallery-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/Designs (1).html',
  '/Designs (2).html',
  '/Designs (3).html',
  '/Designs (4).html',
  '/Designs (5).html',
  '/Designs (6).html',
  '/Designs (7).html',
  '/imgs/logoIeadmi.png',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('[Service Worker] Erro ao cachear:', error);
      })
  );
  self.skipWaiting();
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Ativando...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Strategy: Cache First, Network Fallback
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch((error) => {
          console.error('[Service Worker] Fetch falhou:', error);
          // Return offline page if available
          return caches.match('/index.html');
        });
      })
  );
});

// Background Sync (optional)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-favorites') {
    event.waitUntil(syncFavorites());
  }
});

async function syncFavorites() {
  console.log('[Service Worker] Sincronizando favoritos...');
  // Implement sync logic here if needed
}

// Push Notifications (optional)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nova atualização disponível!',
    icon: '/imgs/logoIeadmi.png',
    badge: '/imgs/logoIeadmi.png',
    vibrate: [200, 100, 200]
  };

  event.waitUntil(
    self.registration.showNotification('IEADMI Gallery', options)
  );
});
