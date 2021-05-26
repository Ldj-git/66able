importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js");
const config = {
  //firebase config를 사용해주시면 됩니다.
  apiKey: "AIzaSyBQVK3evwqHa30U6dB2YFFUXLOQ7MC8VDQ",
  authDomain: "able-1f524.firebaseapp.com",
  projectId: "able-1f524",
  storageBucket: "able-1f524.appspot.com",
  messagingSenderId: "572766886314",
  appId: "1:572766886314:web:895f04ca9343322a46f3d3",
  measurementId: "G-L09CW09KHP",
};
firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
