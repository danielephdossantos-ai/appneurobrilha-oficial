self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'NeuroBrilha Kids';
  const options = {
    body: data.body || 'Você tem uma nova mensagem!',
    icon: '/pwa-192x192.png',
    badge: '/favicon.ico',
    data: data.url || '/'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data)
  );
});
