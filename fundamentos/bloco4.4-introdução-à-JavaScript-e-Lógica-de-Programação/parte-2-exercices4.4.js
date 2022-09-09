//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palidromeCheck(word) {
    let check = word.split("").reverse().join("");
    if (word == check) {
        return (true);
    } else {
        return (false);
    }
};
console.log(palidromeCheck(""));

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function highestIndex(array) {
    let highest = 0;
    for (let index in array) {
        if (array[index] > highest) {
            highest = index
        }
    }
    return highest;
}
console.log(highestIndex([2, 3, 6, 7, 10, 1]))

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowerIndex(array) {
    let lower = 0;
    for (let i in array) {
        if (array[i] < lower) {
            lower = i
        };
    };
    return lower;
};
console.log(lowerIndex([2, 4, 6, 7, 10, 0, -3]))

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggestName(names) {
    let biggest = "";
    for (let name in names) {
        if (names[name].length > biggest.length) {
            biggest = names[name];
        }
    }
    return biggest;
}
console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
  
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
  
    return numeros[indexNumeroRepetido];
  }
  
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); 

  //Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.


  function somaTodosNumeros(numero) {
    let total = 0;
  
    for (let index = 1; index <= numero; index += 1) {
      total = total + index;
    }
    return total;
  }
  
  console.log(somaTodosNumeros(5)); 

  //Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

  function verificaFimPalavra(palavra, fimPalavra) {
    let inversoPalavra = palavra.split('').reverse().join('');
    let inversoFimPalavra = fimPalavra.split('').reverse().join('');
    let result;
  
    for (let index = 0; index < inversoFimPalavra.length; index += 1) {
      if (inversoPalavra[index] !== inversoFimPalavra[index]) {
        result = false;
        break; 
      } else {
        result = true;
      }
    }
    
    return result;
  }
  
  console.log(verificaFimPalavra('trybe', 'be')); 
  console.log(verificaFimPalavra('joaofernando', 'fernan')); 