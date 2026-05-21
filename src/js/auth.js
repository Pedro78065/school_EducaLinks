import { app } from "./firebase.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/* LOGIN */
export function login() {
    return signInWithPopup(auth, provider);
}

/* LOGOUT */
export function logout() {
    return signOut(auth);
}

export { auth, onAuthStateChanged };