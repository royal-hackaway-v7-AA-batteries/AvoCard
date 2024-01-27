// Using JS (Modular) V9 Firestore syntax

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFng4SlyrJ33txyWroBuYM5Cyu0ZyQ930",
  authDomain: "royal-hackaway-v7.firebaseapp.com",
  projectId: "royal-hackaway-v7",
  storageBucket: "royal-hackaway-v7.appspot.com",
  messagingSenderId: "792820093216",
  appId: "1:792820093216:web:f396d08687fa7061d48745",
  measurementId: "G-Y069PEEHGX"  // optional for Firebase JS SDK v7.20.0+
};

initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
