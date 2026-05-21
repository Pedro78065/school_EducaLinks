import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBTOjmVD31ugBlktc4gTspP6xXp0O4H5kw",

    authDomain: "educalink05.firebaseapp.com",

    projectId: "educalink05",

    storageBucket: "educalink05.firebasestorage.app",

    messagingSenderId: "542318846591",

    appId: "1:542318846591:web:6e05c7d059893c6008154a"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };