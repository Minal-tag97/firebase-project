// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAGM8RwDRYb31scXUfhXkEZPwbnY08uaBw",
  authDomain: "fir-project-8fcbb.firebaseapp.com",
  projectId: "fir-project-8fcbb",
  storageBucket: "fir-project-8fcbb.firebasestorage.app",
  messagingSenderId: "653735582216",
  appId: "1:653735582216:web:74425e289769810a070fbd",
  measurementId: "G-F22TWZ22E0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


