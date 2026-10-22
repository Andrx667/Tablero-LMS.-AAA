// Importar las funciones necesarias de los SDKs de Firebase (Versión Modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configuración de tu proyecto
const firebaseConfig = {
    apiKey: "AIzaSyAvJK24f82Yu_N_Gny59AOC7xRUZFmruzA",
    authDomain: "amaram-tv.firebaseapp.com",
    projectId: "amaram-tv",
    storageBucket: "amaram-tv.firebasestorage.app",
    messagingSenderId: "1020922512259",
    appId: "1:1020922512259:web:3a614d057f1cb66dcbecb6",
    measurementId: "G-V99CZRD5R7"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar para usarlos en tus páginas
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, setDoc, doc };
