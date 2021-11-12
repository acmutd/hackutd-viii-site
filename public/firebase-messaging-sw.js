importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.9.0/firebase-messaging.js');

// TODO: Abstract this into environment variable


function setup() {
    firebase.initializeApp({
      apiKey: "AIzaSyCsZiZS2pr27YgSQsFC8eoojQ5hXtRUFvA",
      authDomain: "AIzaSyCsZiZS2pr27YgSQsFC8eoojQ5hXtRUFvA",
      projectId: "acmutd-hackportal",
      storageBucket: "acmutd-hackportal.appspot.com",
      messagingSenderId: "926149825282",
      appId: "1:926149825282:web:e316c69be0aa054cf3e81b",
      measurementId: "G-MV5R5SNQWH"
    });
    
  const messaging = firebase.messaging();

  messaging.onBackgroundMessage(function (payload) {
    const { announcement } = JSON.parse(payload.data.notification);
    var options = {
      body: announcement,
      icon: '/icons/launcher-icon-4x.png',
      tag: new Date().toUTCString(),
    };
    self.registration.showNotification("HackPortal Announcement", options);
  });
}

setup();


//background notifications will be received here

