import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyD2jY1vA2aCnN34AxHBmk8gD4JIQsE_BF8",
    authDomain: "save-club-d87e5.firebaseapp.com",
    projectId: "save-club-d87e5",
    storageBucket: "save-club-d87e5.appspot.com",
    messagingSenderId: "645614477167",
    appId: "1:645614477167:web:cb193916a671375851129a",
    measurementId: "G-Q5C10NRLSD",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export { auth, provider };

export default db;
