import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBURI3qbrPlQntVzUB1sAab6iqKDNGhDnQ",
  authDomain: "clone-b08de.firebaseapp.com",
  projectId: "clone-b08de",
  storageBucket: "clone-b08de.appspot.com",
  messagingSenderId: "154243451477",
  appId: "1:154243451477:web:1d1d9ed3f421657d14a2dc",
  measurementId: "G-871Y4TZNFD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
// Initialize Firestore
const storage = getStorage();

// Initialize Storage
export { auth, provider, signInWithPopup, db, storage, FacebookAuthProvider };
