// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZpaBT0sW4h9vJhfUHycFbRL2WolTz8OY",
  authDomain: "photofolio-49004.firebaseapp.com",
  projectId: "photofolio-49004",
  storageBucket: "photofolio-49004.appspot.com",
  messagingSenderId: "442640355256",
  appId: "1:442640355256:web:8ec316dd3d223484a3494d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;