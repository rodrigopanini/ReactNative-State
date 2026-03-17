// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB79JKsrT-XYThlbcxG1ZvZgux1UFVTjdo",
  authDomain: "todo-list-53e54.firebaseapp.com",
  projectId: "todo-list-53e54",
  storageBucket: "todo-list-53e54.firebasestorage.app",
  messagingSenderId: "894673174489",
  appId: "1:894673174489:web:326bc65dd092d5080ba3c8",
  measurementId: "G-JRQV3WBJMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)