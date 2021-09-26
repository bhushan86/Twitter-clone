import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAoaCJ3ChHQS0ke6o3PFBTZbdSQvGvPE2E",
    authDomain: "twitter-clone-cf251.firebaseapp.com",
    projectId: "twitter-clone-cf251",
    storageBucket: "twitter-clone-cf251.appspot.com",
    messagingSenderId: "535913367234",
    appId: "1:535913367234:web:6e61952ff7814f21439d5b",
    measurementId: "G-KZ2Q43LCX5"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();

  export default db;