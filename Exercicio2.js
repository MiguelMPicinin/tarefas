var prompt = require("prompt-sync")();


/*Exercicio 2.1*/
var nome = "Miguel";
var idade = 17;
var altura = 1.80;
var programador = true;

console.log("Ola meu nome é " + nome,"Eu tenho " + idade,"Minha Altura é de " + altura,"E é " + programador + " que eu sou um programador");

/*Exercicio2.2*/

var anoNascimento = 2007;
var anoNascimentoString = anoNascimento.toString();

console.log("Eu nasci em " + anoNascimentoString);
/*Segunda parte*/
var peso = "65.5";

var pesoNumero = parseFloat(peso);
console.log("Meu peso é de " + pesoNumero);

/*Exercicio2.3*/ 
 function soma(a,b) {
    return(a+b);
 };

 function sub(a,b) {
    return(a-b);
 };

 function multi(a,b) {
    return(a*b);
 };

 function divi(a,b) {
    return(a/b);
 };

 function menu() {
    console.log("Escolha a operação que voce quer usar");
    console.log("1.Soma");
    console.log("2.Subtração");
    console.log("3.multiplicação");
    console.log("4.Divisão");

    let operacao = Number(prompt());
    switch (operacao) {
        case 1:
            var a = Number(prompt("Informe o Primeiro Numero "));    
            var b = Number(prompt("Informe o Segundo Numero "));
            console.log(soma(a,b));    
            break;
        case 2:
            var a = Number(prompt("Informe o Primeiro Numero "));    
            var b = Number(prompt("Informe o Segundo Numero "));
            console.log(sub(a,b));    
            break;
        case 3:
            var a = Number(prompt("Informe o Primeiro Numero "));    
            var b = Number(prompt("Informe o Segundo Numero "));
            console.log(multi(a,b));    
            break;
        case 4:
            var a = Number(prompt("Informe o Primeiro Numero "));    
            var b = Number(prompt("Informe o Segundo Numero "));
            if (b===0) {
                console.log("Não seras dividido por Zero ");
            } else {
                console.log(divi(a,b));
            }    
            break;
        default:
            console.log("Operação Invalida")
            break;
    } 


}    

menu();