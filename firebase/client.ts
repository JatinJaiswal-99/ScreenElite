import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfgpsQAlzh91k0lekDKmQtgZKbDvkYYfU",
  authDomain: "tutorscreen.firebaseapp.com",
  projectId: "tutorscreen",
  storageBucket: "tutorscreen.firebasestorage.app",
  messagingSenderId: "1156251274473",
  appId: "1:1156251274473:web:0b416b7eb5ffb34f40c478",
  measurementId: "G-PTX2M26H4W",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);