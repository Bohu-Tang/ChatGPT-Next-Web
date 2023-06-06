if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope + '#/chat?cid=20130202');
    }, function (err) {
      console.error('ServiceWorker registration failed: ', err);
    });
  });
}