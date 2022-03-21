import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqV9RtFWQg_wOwDYxy4Lnvhc3goQC8FtE",
  authDomain: "clothing-store-db-49cf7.firebaseapp.com",
  projectId: "clothing-store-db-49cf7",
  storageBucket: "clothing-store-db-49cf7.appspot.com",
  messagingSenderId: "180779606519",
  appId: "1:180779606519:web:fb1cf90dca3f88c8064ef2",
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

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocumentReference = doc(db, "users", userAuth.uid);

  console.log(userDocumentReference);

  const userSnapshot = await getDoc(userDocumentReference);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocumentReference, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocumentReference;
};
