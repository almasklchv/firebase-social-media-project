// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALg1D7EG-Zl4Iml9DWpAf68RlWXs_AQ1g",
  authDomain: "react-course-4ca57.firebaseapp.com",
  projectId: "react-course-4ca57",
  storageBucket: "react-course-4ca57.appspot.com",
  messagingSenderId: "690419464830",
  appId: "1:690419464830:web:4c03d1bb1de968a8e9f62f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
