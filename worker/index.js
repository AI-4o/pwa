// worker/index.js

// Self logging when service worker gets installed
self.addEventListener('install', function (event) {
  console.log('Service Worker installed');
});

// Custom push event handler
self.addEventListener('push', function (event) {
  const data = event.data.json();

  const options = {
    body: data.body,
    icon: data.icon || '/icon.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '1'
    },
    actions: [
      { action: 'explore', title: 'View Details' },
      { action: 'close', title: 'Close' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  if (event.action === 'explore') {
    // Open a specific URL when user clicks the notification
    clients.openWindow('/');
  }
});
