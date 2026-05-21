
import { db } from "./firebase.js";
import { login, logout, auth, onAuthStateChanged } from "./auth.js";

import {
    collection,
    addDoc,
    onSnapshot,
    deleteDoc,
    doc,
    updateDoc,
    getDoc,
    setDoc
} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

/* =========================
   ELEMENTOS
========================= */

const lista = document.getElementById("lista_links");
const botaoAdicionar = document.getElementById("adicionar");
const loginBtn = document.getElementById("login_btn");
const logoutBtn = document.getElementById("logout_btn");

/* =========================
   FIRESTORE
========================= */

const atividadesRef = collection(db, "atividades");

/* =========================
   ESTADO (SÓ UI)
========================= */

let isLogged = false;

/* =========================
   AUTH
========================= */

loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);

/* =========================
   CRIAR USER (SE NÃO EXISTE)
========================= */

async function criarUsuarioSeNaoExistir(user) {

    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
        await setDoc(ref, {
            role: "aluno"
        });
    }
}

/* =========================
   AUTH LISTENER
========================= */

onAuthStateChanged(auth, async (user) => {

    if (!user) {
        isLogged = false;
        document.body.classList.remove("logado");
        return;
    }

    isLogged = true;

    await criarUsuarioSeNaoExistir(user);

    document.body.classList.add("logado");
});

/* =========================
   CREATE
========================= */

botaoAdicionar.addEventListener("click", async () => {

    if (!isLogged) return;

    const titulo = document.getElementById("titulo").value.trim();
    const materia = document.getElementById("materia").value.trim();
    const link = document.getElementById("link").value.trim();

    if (!titulo || !materia || !link) {
        alert("Preencha todos os campos.");
        return;
    }

    await addDoc(atividadesRef, {
        titulo,
        materia,
        link
    });

    document.getElementById("titulo").value = "";
    document.getElementById("materia").value = "";
    document.getElementById("link").value = "";
});

/* =========================
   READ
========================= */

onSnapshot(atividadesRef, (snapshot) => {

    lista.innerHTML = "";

    snapshot.forEach((item) => {

        const data = item.data();

        const card = document.createElement("div");
        card.classList.add("atividade");

        card.innerHTML = `
            <h3>${data.titulo}</h3>
            <p>${data.materia}</p>

            <div class="botoes_card">
                <a href="${data.link}" target="_blank">Abrir</a>

                <button class="editar">Editar</button>
                <button class="remover">Remover</button>
            </div>
        `;

        card.querySelector(".remover").addEventListener("click", async () => {
            await deleteDoc(doc(db, "atividades", item.id));
        });

        card.querySelector(".editar").addEventListener("click", async () => {

            const novoTitulo = prompt("Novo título:", data.titulo);
            if (!novoTitulo) return;

            await updateDoc(doc(db, "atividades", item.id), {
                titulo: novoTitulo
            });
        });

        lista.appendChild(card);
    });
});