// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkLrLDtp_DSvdMwgbqOcAF1PNiogPGk2k",
  authDomain: "project-63541.firebaseapp.com",
  projectId: "project-63541",
  storageBucket: "project-63541.firebasestorage.app",
  messagingSenderId: "348495071387",
  appId: "1:348495071387:web:8e916f643d5a1b22ad9e3e",
  measurementId: "G-K330H4306S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);