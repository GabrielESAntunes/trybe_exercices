//Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.


function operations(a, o, b) {

    if (o == '+') {
        return (a + b)
    } else if (o == '-') {
        return (a - b)
    } else if (o == '*') {
        return (a * b)
    } else if (o == '/') {
        return (a / b)
    } else if (o == '%') {
        return (a % b)
    }
}

console.log(operations(20, "*", 6))

//(Até que deu certo mais o menos)


function comparing(n1, n2) {

    if (n1 >= n2) {
        return (n1);
    } else if (n1 <= n2) {
        return (n2);
    }

}

console.log(comparing(30, 50));


function higherNumber(n3, n4, n5) {

    if (n3 > n4 && n3 > n5) {
        return (n3);
    } else if (4n > n3 && n4 > n5) {
        return (n4);
    } else if (n5 > n4 && n5 > n3) {
        return (n5);
    }

}
console.log(higherNumber(30, 5, 10));

function number(num) {

    if (num > 0) {
        return ('positive');
    } else if (num < 0) {
        return ('negative');
    } else {
        return ('zero');
    };
}
console.log(number(-10));

function triangle (left,rigth,top) {
    
    if (left+rigth+top == 180) {
        return(true)
    } else if (left+rigth+top != 180) {
        return(false)
    } else {
        return("erro, parametos inválidos")
    }
    
}
console.log(triangle(60,60,60));