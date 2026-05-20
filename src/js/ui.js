export function criarCard(
    atividadeData,
    removerCallback
){

    const atividade =
        document.createElement("div");

    atividade.classList.add("atividade");

    const h3 =
        document.createElement("h3");

    h3.textContent =
        atividadeData.titulo;

    const p =
        document.createElement("p");

    p.innerHTML =
        `<strong>Matéria:</strong> ${atividadeData.materia}`;

    const botoes =
        document.createElement("div");

    botoes.classList.add("botoes_card");

    const link =
        document.createElement("a");

    link.href =
        atividadeData.link;

    link.target = "_blank";

    link.textContent =
        "Acessar atividade";

    const deletar =
        document.createElement("button");

    deletar.classList.add("botao_delete");

    deletar.textContent =
        "Remover";

    deletar.addEventListener(
        "click",
        () => removerCallback(
            atividadeData.id
        )
    );

    botoes.appendChild(link);

    botoes.appendChild(deletar);

    atividade.appendChild(h3);

    atividade.appendChild(p);

    atividade.appendChild(botoes);

    return atividade;
}