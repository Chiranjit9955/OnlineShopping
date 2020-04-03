import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBEDG9PerbYdbKDwygK96gWknDFnPv--9E",
  authDomain: "crown-database-efd84.firebaseapp.com",
  databaseURL: "https://crown-database-efd84.firebaseio.com",
  projectId: "crown-database-efd84",
  storageBucket: "crown-database-efd84.appspot.com",
  messagingSenderId: "868190415777",
  appId: "1:868190415777:web:5ddf729917a2fe9b9ab9e0",
  measurementId: "G-BXHQ641MTJ"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
