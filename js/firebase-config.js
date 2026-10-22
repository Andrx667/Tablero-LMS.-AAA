// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvJK24f82Yu_N_Gny59AOC7xRUZFmruzA",
  authDomain: "amaram-tv.firebaseapp.com",
  projectId: "amaram-tv",
  storageBucket: "amaram-tv.firebasestorage.app",
  messagingSenderId: "1020922512259",
  appId: "1:1020922512259:web:3a614d057f1cb66dcbecb6",
  measurementId: "G-V99CZRD5R7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
