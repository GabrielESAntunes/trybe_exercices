//Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
//Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
//Implemente condicionais para que:
//Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
//Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
//Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
//Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
//Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
//Agora imprima a variável message fora das suas condições.


const currentHour = 14;
let message = [];

if (currentHour >= 22) {
    message.push("Não deveríamos comer nada, é hora de dormir")

    console.log(message);
} else if (currentHour >= 18 && currentHour < 22) {
    message.push("Rango da noite, vamos jantar :D")

    console.log(message);
} else if (currentHour >= 14 && currentHour < 18) {
    message.push("Vamos fazer um bolo pro café da tarde?")

    console.log(message);
} else if (currentHour >= 11 && currentHour <= 14) {
    message.push("Hora do almoço!!!")

    console.log(message);
} else if (currentHour >= 4 && currentHour <= 11) {
    message.push("Hmmm, cheiro de café recém passado")

    console.log(message);
} else {

}


//Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
//Implemente condicionais para que:
//Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
//Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".


let weekDay = "quarta-feira";

if(weekDay === "segunda-feira" || "terça-feira" || "quarta-feira" || "quinta-feira" || "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
    console.log("FINALMENTE, descanso merecido UwU");
}