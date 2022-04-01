import firebase from 'firebase/compat/app';



import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDy9uesq0sP7t1U3cgil57rF8KiYUVoWxY",
    authDomain: "social-network-345700.firebaseapp.com",
    projectId: "social-network-345700",
    storageBucket: "social-network-345700.appspot.com",
    messagingSenderId: "772139797004",
    appId: "1:772139797004:web:c000ba31416e1fa972fc29"
  };
  

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }