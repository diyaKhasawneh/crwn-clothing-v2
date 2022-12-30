import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5vYQRpdWwswtJon7LadYNr9BRdlWmOLA",
  authDomain: "crwn-clothing-db-5e4de.firebaseapp.com",
  projectId: "crwn-clothing-db-5e4de",
  storageBucket: "crwn-clothing-db-5e4de.appspot.com",
  messagingSenderId: "625359758534",
  appId: "1:625359758534:web:d2e9be185e5d2583a1e3c7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const creatUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

const userSnapshot = await getDoc(userDocRef);
console.log(userSnapshot);
console.log(userSnapshot.exists());
};