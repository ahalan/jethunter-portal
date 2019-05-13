
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyCBsnS-hIkrImSZMwQbHt8U2JIAknLrGkY',
  authDomain: 'jethunter-portal.firebaseapp.com',
  databaseURL: 'https://jethunter-portal.firebaseio.com',
  projectId: 'jethunter-portal',
  storageBucket: 'jethunter-portal.appspot.com',
  messagingSenderId: '1098355360065',
  appId: '1:1098355360065:web:bafd7799b37f1b5a'
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAppAuth = firebaseApp.auth();


export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
  twitterProvider: new firebase.auth.TwitterAuthProvider()
};


