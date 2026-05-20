const CHAVE = "educalinks_atividades";

export function salvarAtividades(lista){

    localStorage.setItem(
        CHAVE,
        JSON.stringify(lista)
    );
}

export function carregarAtividades(){

    const dados = localStorage.getItem(CHAVE);

    return dados ? JSON.parse(dados) : [];
}