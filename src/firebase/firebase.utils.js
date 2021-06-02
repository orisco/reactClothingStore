import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCScEz3FSWqwSbJd0kc1t5zKMwVZcxFDDU",
  authDomain: "crowndb-2f6ec.firebaseapp.com",
  projectId: "crowndb-2f6ec",
  storageBucket: "crowndb-2f6ec.appspot.com",
  messagingSenderId: "344205332041",
  appId: "1:344205332041:web:9c90ca8fb752e2ee13f998",
  measurementId: "G-KW2TWRGP9C",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
