importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');

let config = {
    apiKey: "AIzaSyAPFPVbe_p-7o4ODzpGVIEOB5St-7PxbsA",
   authDomain: "quiz-tst.firebaseapp.com",
   databaseURL: "https://quiz-tst.firebaseio.com",
   projectId: "quiz-tst",
   storageBucket: "quiz-tst.appspot.com",
   messagingSenderId: "463133685025",
   appId: "1:463133685025:web:8fa031aeeae54688767a60",
   measurementId: "G-XVTSCFJ50E"
  
  };

firebase.initializeApp(config);
const messaging = firebase.messaging();
