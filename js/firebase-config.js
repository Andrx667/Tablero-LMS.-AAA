// Configuración de Firebase para AMARAM TV (Versión Clásica SDK v8)
const firebaseConfig = {
    apiKey: "AIzaSyAvJK24f82Yu_N_Gny59AOC7xRUZFmruzA",
    authDomain: "amaram-tv.firebaseapp.com",
    projectId: "amaram-tv",
    storageBucket: "amaram-tv.firebasestorage.app",
    messagingSenderId: "1020922512259",
    appId: "1:1020922512259:web:3a614d057f1cb66dcbecb6",
    measurementId: "G-V99CZRD5R7"
};

// Inicializar Firebase si no ha sido inicializado
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Variables globales para usar en el proyecto
const db = firebase.firestore();
const auth = firebase.auth();
