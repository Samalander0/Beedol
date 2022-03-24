import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAXt4JeFKGNjYoyYd0oLUakpsEUcNNN6rI",
  authDomain: "beedol.firebaseapp.com",
  projectId: "beedol",
  storageBucket: "beedol.appspot.com",
  messagingSenderId: "589306729374",
  appId: "1:589306729374:web:929b467fc82d225d827c8f",
  measurementId: "G-TDVNNBKYXY"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();