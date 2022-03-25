import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAXt4JeFKGNjYoyYd0oLUakpsEUcNNN6rI",
  authDomain: "beedol.firebaseapp.com",
  projectId: "beedol",
  storageBucket: "beedol.appspot.com",
  messagingSenderId: "589306729374",
  appId: "1:589306729374:web:929b467fc82d225d827c8f",
  measurementId: "G-TDVNNBKYXY"
};

if (!firebase.getApps) {
  firebase.initializeApp(firebaseConfig);
}

//Authentication stuff
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

//Storage stuff
export const firestore = firebase.firestore();
export const storage = firebase.storage();