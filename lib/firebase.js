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
  firebase.initializeApp(firebaseConfig);
}

//Authentication stuff
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

//Storage stuff
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;


//Helper Functions

/*
 * Gets a users/{uid} document with username
 * @param  {string} username
*/
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/*
 Converts a firestore document to JSON
 @param  {DocumentSnapshot} doc
*/
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment;