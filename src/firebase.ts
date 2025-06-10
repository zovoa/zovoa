// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCncBPAu0aA5lMvo_yI12IvmAJmYexYVVY",
  authDomain: "ammaconstruction-db736.firebaseapp.com",
  projectId: "ammaconstruction-db736",
  storageBucket: "ammaconstruction-db736.firebasestorage.app",
  messagingSenderId: "950078485562",
  appId: "1:950078485562:web:c188df385c250a84ffb103"
};


const app = initializeApp(firebaseConfig);
console.log("✅ Firebase initialized:", app.name);
export const auth = getAuth(app);
