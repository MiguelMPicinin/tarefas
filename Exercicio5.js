var prompt = require("prompt-sync")();

/*Exercicio5.1*/
function boasVindas(nome) {
    console.log("Olá, " + nome + "! Seja bem-vindo!!!");
};
console.log(boasVindas("Miguel"));

/*Exercicio5.2 */
var n1 = Number(prompt("De o primeiro numero: "));
var n2 = Number(prompt("De o segundo numero: "));
var operacao = prompt("Escolha uma operação entre +(soma), -(subtração), *(multiplicação) e /(divisão) e digite o sinal: ");

function calculadora(n1, n2, operacao) {
    if (operacao === "+") {
        return n1 + n2;
    } else if (operacao === "-") {
        return n1 - n2;
    } else if (operacao === "*") {
        return n1 * n2;
    } else if (operacao === "/") {
        if (n2 === 0) {
            return "Erro: Não será permitido dividir por 0";
        }
        return n1 / n2;
    } else {
        return "Essa operação não existe";
    }
}

console.log("O resultado foi: " + calculadora(n1, n2, operacao));

/*Exercicio5.3 */

var nota1 = Number(prompt("Digite sua Primeira nota: "));
var nota2 = Number(prompt("Digite sua Segunda nota: "));
var nota3 = Number(prompt("Digite sua Terceira nota: "));

function media(nota1,nota2,nota3) {
    return((nota1+nota2+nota3)/3)
}

if (media>=7) {
    console.log("Você foi aprovado")
} else {
    console.log("Você foi reprovado")
}