// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e61c5.firebaseapp.com",
  projectId: "mern-estate-e61c5",
  storageBucket: "mern-estate-e61c5.appspot.com",
  messagingSenderId: "177187475920",
  appId: "1:177187475920:web:e30b3793b151016610a9d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);