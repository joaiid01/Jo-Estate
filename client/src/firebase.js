// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jo-estate.firebaseapp.com",
  projectId: "jo-estate",
  storageBucket: "jo-estate.appspot.com",
  messagingSenderId: "783972152785",
  appId: "1:783972152785:web:ba7aaf9929dfef0ea8dcf0"
};

// Initialize Firebase
  export const app = initializeApp(firebaseConfig);