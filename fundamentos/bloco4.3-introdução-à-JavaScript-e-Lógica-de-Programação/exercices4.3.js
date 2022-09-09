//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
//O fatorial é representado pelo sinal !
//! = 4 x 3 x 2 x 1 = 24
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial = 1;

for (let i = 1; i <= 10; i++) {
    fatorial = fatorial * i
}
console.log(fatorial)

//Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let contrario = '';

for (let letra of word) {
    contrario = letra + contrario;
}
console.log(contrario)

//Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let maiorPalavra ="";

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }

}
console.log(maiorPalavra)

let menorPalavra ="";

for (let indice = 0; indice < array.length; indice += 1) {
    if (array[indice].length < menorPalavra.length) {
        menorPalavra = indice;
    }
}
console.log(menorPalavra)
