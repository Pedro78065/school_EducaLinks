export function validarCampos(
    titulo,
    materia,
    link
){

    if(
        titulo.trim() === "" ||
        materia.trim() === "" ||
        link.trim() === ""
    ){
        alert("Preencha todos os campos.");

        return false;
    }

    if(titulo.length > 60){

        alert("Título muito grande.");

        return false;
    }

    if(materia.length > 40){

        alert("Matéria muito grande.");

        return false;
    }

    try{

        new URL(link);

    }catch{

        alert("Digite uma URL válida.");

        return false;
    }

    return true;
}