//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index])
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}
console.log(soma);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let resultadoDaSoma = 0;
for (let calculo = 0; calculo < numbers.length; calculo++) {
    resultadoDaSoma += numbers[calculo];
}
let media = resultadoDaSoma / 10;

console.log(media);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (soma > 20) {
    console.log("valor maior que 20");
} else if (soma <= 20) {
    console.log("valor menor ou igual a 20");
} else {

}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o
let maiorNumero = numbers[0]

for (let ind = 0; ind < numbers.length; ind++) {
    if (numbers[ind] > maiorNumero) {
        maiorNumero = numbers[ind]
    }
}
console.log("O maior numero é" + " " + maiorNumero);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numeros = [];
for (let indice = 0; indice < numbers.length; indice++) {
    if (numbers[indice] % 2 == 1) {
        numeros.push(numbers[indice])
    }
}
console.log(numeros)

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorNumero = numbers[0]

for (let men = 0; men < numbers.length; men++) {
    if (numbers[men] < menorNumero) {
        menorNumero = numbers[men]
    }
}
console.log("O menor numero é" + " " + menorNumero);

//Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let penultimaQuestao = []

for (let ex = 0; ex <= 25; ex++) {
    penultimaQuestao.push(ex)
}
console.log(penultimaQuestao)

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let ultimaQuestão = []

for (let div = 0; div <= penultimaQuestao.length; div++) {
    ultimaQuestão.push(div / 2)
}
console.log(ultimaQuestão)