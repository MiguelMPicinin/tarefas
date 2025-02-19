var prompt = require("prompt-sync")();

/*Extra 1 */

var numeroAleatorio = Math.floor(Math.random() * 10) + 1;

var palpite = Number(prompt("Adivinhe o número entre 1 e 10: "));

if (palpite === numeroAleatorio) {
  console.log("Parabéns! Você tem muita sorte!");
} else {
  console.log("Que pena! O número era " + numeroAleatorio + ".!");
}

/*Extra 2 */

var peso = parseFloat(prompt("Digite seu peso em kg: "));
var altura = parseFloat(prompt("Digite sua altura em metros: "));

let imc = peso / (altura * altura);

if (imc<18.5) {
    console.log("Você esta abaixo do peso, coma alguma coisa!!")
} else if (imc>=18.5 && imc<=24.9) {
    console.log("Você esta com o peso ideal")
} else if (imc>=25 && imc<=29.9) {
    console.log("Você esta com sobrepeso")
} else {
    console.log("Você esta obeso")
}