//Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
//Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada', 'lista' ou 'reprovada'. Como default, imprima a mensagem de 'não se aplica'. 

let estudante = "aprovado";

switch (estudante) {
    case "aprovado":
        console.log("Parabéns !! você passou.");
        break;

    case "lista":
        console.log("Vocẽ está na lista de espera.")
        break;

    case "reprovado":
        console.log("Você foi reprovado(a).")
        break;


    default:
        console.log("Não se aplica.")

}

