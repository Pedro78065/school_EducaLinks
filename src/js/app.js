import {
    salvarAtividades,
    carregarAtividades
}
from "./storage.js";

import {
    validarCampos
}
from "./validation.js";

import {
    criarCard
}
from "./ui.js";

const botao =
    document.getElementById("adicionar");

const lista =
    document.getElementById("lista_links");

let atividades =
    carregarAtividades();

renderizar();

botao.addEventListener(
    "click",
    adicionarAtividade
);

function adicionarAtividade(){

    const titulo =
        document.getElementById("titulo");

    const materia =
        document.getElementById("materia");

    const link =
        document.getElementById("link");

    if(
        !validarCampos(
            titulo.value,
            materia.value,
            link.value
        )
    ){
        return;
    }

    const atividade = {

        id:Date.now(),

        titulo:
            titulo.value.trim(),

        materia:
            materia.value.trim(),

        link:
            link.value.trim()
    };

    const duplicado =
        atividades.some(
            item =>
                item.link === atividade.link
        );

    if(duplicado){

        alert(
            "Essa atividade já foi adicionada."
        );

        return;
    }

    atividades.push(atividade);

    salvarAtividades(atividades);

    renderizar();

    titulo.value = "";

    materia.value = "";

    link.value = "";
}

function removerAtividade(id){

    atividades =
        atividades.filter(
            atividade =>
                atividade.id !== id
        );

    salvarAtividades(atividades);

    renderizar();
}

function renderizar(){

    lista.innerHTML = "";

    atividades.forEach(atividade => {

        const card =
            criarCard(
                atividade,
                removerAtividade
            );

        lista.appendChild(card);
    });
}