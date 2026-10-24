
// Tus credenciales
var firebaseConfig = {
    apiKey: "AIzaSyAvJK24f82Yu_N_Gny59AOC7xRUZFmruzA",
    authDomain: "amaram-tv.firebaseapp.com",
    projectId: "amaram-tv",
    storageBucket: "amaram-tv.firebasestorage.app",
    messagingSenderId: "1020922512259",
    appId: "1:1020922512259:web:3a614d057f1cb66dcbecb6"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar servicios globales para que login y catálogo los reconozcan
const auth = firebase.auth();
const db = firebase.firestore();
