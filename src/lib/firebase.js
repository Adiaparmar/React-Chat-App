import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-app-8145e.firebaseapp.com",
  projectId: "react-chat-app-8145e",
  storageBucket: "react-chat-app-8145e.appspot.com",
  messagingSenderId: "793459359759",
  appId: "1:793459359759:web:2eb95c79ff27c672e0237a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

