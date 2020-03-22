import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const Config = {
  apiKey: "AIzaSyBEDG9PerbYdbKDwygK96gWknDFnPv--9E",
  authDomain: "crown-database-efd84.firebaseapp.com",
  databaseURL: "https://crown-database-efd84.firebaseio.com",
  projectId: "crown-database-efd84",
  storageBucket: "crown-database-efd84.appspot.com",
  messagingSenderId: "868190415777",
  appId: "1:868190415777:web:5ddf729917a2fe9b9ab9e0",
  measurementId: "G-BXHQ641MTJ"
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
