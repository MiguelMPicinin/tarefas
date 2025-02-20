var prompt = require("prompt-sync")();

/*Exercicio3.1*/
var numero = Number(prompt(" Fale um numero: "));

if ((numero%2)==0) {
    console.log("O Numero " + numero + " é par");
} else {
   console.log("O Numero " + numero + " é impar"); 
};

/*Exercicio3.2 */

var idade = Number(prompt("Fale a sua idade: "));

if (idade<16) {
    console.log("Voce não pode votar");
} else if (idade >= 16 && <= 17) {
    console.log("O voto para você é opicional");
} else {
    console.log("Você é obrigado a votar, e você tambem pode tirar o CNH");
};
