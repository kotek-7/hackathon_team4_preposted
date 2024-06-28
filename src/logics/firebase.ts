import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDo29C-i_25v1jXUtNubHhoJ4NTZnvOHKc",
  authDomain: "craft-stadium-finaldemo.firebaseapp.com",
  projectId: "craft-stadium-finaldemo",
  storageBucket: "craft-stadium-finaldemo.appspot.com",
  messagingSenderId: "1050861932340",
  appId: "1:1050861932340:web:b0086b1b188fd7928d5f61"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
