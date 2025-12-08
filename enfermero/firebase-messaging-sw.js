// Importa Firebase compat en el SW
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// Inicializa Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBo44qARfppZVIQMU39hwAchuZRwTAERos",
  authDomain: "pwahospital.firebaseapp.com",
  projectId: "pwahospital",
  storageBucket: "pwahospital.firebasestorage.app",
  messagingSenderId: "81942710592",
  appId: "1:81942710592:web:ee443a0e2a34e93ca892a5"
});

// Obtén la instancia de Messaging
const messaging = firebase.messaging();

// Mensajes en segundo plano
messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification?.title || 'Notificación';
  const options = {
    body: payload.notification?.body || '',
    // icon: '/icon-192.png'
  };
  self.registration.showNotification(title, options);
});

// Manejar clics en notificación
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('./'));
});
