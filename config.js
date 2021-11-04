import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAEskN5ahvKoAZE8MAd_SMZlUNGiDGjWJw",
    authDomain: "project67-fdc14.firebaseapp.com",
    projectId: "project67-fdc14",
    storageBucket: "project67-fdc14.appspot.com",
    messagingSenderId: "1005547298754",
    appId: "1:1005547298754:web:227133cbfa1c0b35e4405b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();