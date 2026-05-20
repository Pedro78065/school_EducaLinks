const perguntas = [
    {
        pergunta: "Qual está escrito corretamente?",
        opcoes: ["Excessão", "Exceção", "Eceção", "Exceçao"],
        correta: 1
    },
    {
        pergunta: "Qual é o plural de 'cidadão'?",
        opcoes: ["cidadões", "cidadãos", "cidadans", "cidadõeses"],
        correta: 1
    },
    {
        pergunta: "Qual frase está correta?",
        opcoes: [
            "Eu vi ele ontem",
            "Eu o vi ontem",
            "Eu viu ele ontem",
            "Eu lhe vi ontem"
        ],
        correta: 1
    }
];

let atual = 0;
let pontos = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

function carregarPergunta() {
    feedback.textContent = "";
    opcoesEl.innerHTML = "";

    const p = perguntas[atual];
    perguntaEl.textContent = p.pergunta;

    p.opcoes.forEach((opcao, index) => {
        const div = document.createElement("div");
        div.classList.add("opcao");
        div.textContent = opcao;

        div.onclick = () => {
            if (index === p.correta) {
                feedback.textContent = "✔ Correto!";
                pontos++;
            } else {
                feedback.textContent = "✖ Errado!";
            }
        };

        opcoesEl.appendChild(div);
    });
}

nextBtn.onclick = () => {
    atual++;

    if (atual < perguntas.length) {
        carregarPergunta();
    } else {
        document.getElementById("quiz").classList.add("hidden");
        document.getElementById("fim").classList.remove("hidden");
        document.getElementById("resultado").textContent =
            `Você acertou ${pontos} de ${perguntas.length}`;
    }
};

carregarPergunta();