// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQpuBAduNGcxdvnlYNWJW-dgAqm7MEKPc",
  authDomain: "damagoapp.firebaseapp.com",
  projectId: "damagoapp",
  storageBucket: "damagoapp.firebasestorage.app",
  messagingSenderId: "1097371032702",
  appId: "1:1097371032702:web:38f6e3855687e54d978c2f"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORE = getFirestore(FIREBASE_APP)