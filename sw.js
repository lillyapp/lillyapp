self.addEventListener('push', event => {
  const data = event.data?.json() || {};
  const title = data.title || 'Lilly – Neue Aktualisierung';
  const options = {
    body: data.body || 'Ein Eintrag wurde geändert.',
    icon: '/icon.png',
    badge: '/icon.png'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
