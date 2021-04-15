import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCOWGofeBsNpwfJ6HWssE3F-dMIvct5Vu4",
    authDomain: "wireless-library-5aece.firebaseapp.com",
    databaseURL: "https://wireless-library-5aece-default-rtdb.firebaseio.com",
    projectId: "wireless-library-5aece",
    storageBucket: "wireless-library-5aece.appspot.com",
    messagingSenderId: "455061580234",
    appId: "1:455061580234:web:8d1d43939b60d4c8a80733"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();