// Exercício 1: Par ou Impar
/* 
const entrada = require('prompt-sync')();
let número = entrada('Digite um número: ')
resto = número % 2
if (resto == 0) 
    {console.log("par")}
else 
    {console.log('impar')}
console.log(resto) 
*/
// Exercício 2: Maior de dois números
/*
const prompt = require('prompt-sync')();

let numero1= parseInt(prompt('Número 1: '));
let numero2= parseInt(prompt('Número 2: '));

if (numero1 > numero2) {console.log(numero1)}
else if (numero1 < numero2) {console.log(numero2)}
else {console.log("os números são iguais mané")}
*/
// Exercício 3: Triângulo
/*
const prompt = require('prompt-sync')();

let lado1 = parseInt(prompt('Insira o primeiro lado do triângulo: '));
let lado2 = parseInt(prompt('Insira o segundo lado do triângulo: '));
let lado3 = parseInt(prompt('Insira o terceiro lado do triângulo: '));

if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
    console.log("da pra fazer triângulo com isso")
}
else {console.log('não da pra fazer triângulo com isso')}
*/
// Exercício 4: Calculadora Simples
/*
const prompt = require('prompt-sync')();

let PrimeiroValor = parseFloat(prompt('Insira o primeiro valor: '));
let Operação = prompt('Insira a operação: ');
let SegundoValor = parseFloat(prompt('Insira o segundo valor: '));

let resultado;

switch (Operação) {
    case '+':
        resultado = PrimeiroValor + SegundoValor
        break;
    case '-':
        resultado = PrimeiroValor - SegundoValor
        break;
    case '*':
        resultado = PrimeiroValor * SegundoValor
        break;
    case '/':
        if (SegundoValor != 0) {resultado = PrimeiroValor / SegundoValor}
        else {console.log('Não se pode dividir por 0! ')}
        
        break;
    default:
        console.log('operação matemática invalida :(')
}
if (
    typeof resultado === "number" && 
    Number.isNaN(resultado) === false
    ){
    console.log(`O resultado é ${resultado}`)
    } else {
        console.log("O resultado não é um número")
    }
*/
// Switch case dia da semana
/*
const prompt = require('prompt-sync')();

let dia = parseInt(prompt('Número do dia da semana: '))
let nomeDIA;

switch(dia) {
    case 1:
        nomeDIA = "Domingo"
        break;
    case 2:
        nomeDIA = "Segunda"
        break;
    case 3:
        nomeDIA ="Terça"
        break;
    case 4:
        nomeDIA = "Quarta"
        break;
}
console.log(nomeDIA)
*/
//Exercício tabuada simples
/*
const prompt = require('prompt-sync')();
let valor;
let nmr = parseFloat(prompt('Insira a tabuada desejada: '))
let resultado = [];
if ( typeof nmr === "number" && Number.isNaN(nmr) === false) {for (i = 0; i <= 100; i+=2) { 
valor = nmr * i
resultado.push(valor)

} console.log(resultado)
} else {console.log("valor inválido")}
*/
//Números primos 1

// const prompt = require('prompt-sync')();

// let nmr = parseFloat(prompt('Qual o número? '))
// let teste;
// let resultado = []

// for (i = 1; i <= nmr; i++) {
// teste = nmr % i
// if( teste == 0 ) {
// resultado.push(i)}
// }

// if(resultado.length == 2) {console.log(nmr + " É primo!")}
// else {console.log(nmr + " NÃO é primo")}
// console.log(resultado)

//Números primos 2
//  let start = 100;
//  let e = 5
//  let teste ;
//  let resultadoFinal = [];
//  let resultadoLocal = [];
// for (i = 2; i <= 100; i++) 
// {for (y = i; y > 0; y--){
// teste = i % y
// if (teste == 0) {resultadoLocal.push(teste)}
// }
// if (resultadoLocal.length == 2) { resultadoFinal.push(i)}
// resultadoLocal = [];
// }
// let start = 5;
// let OOO = 0
// let teste ;
// let resultadoFinal = [];
// let resultadoLocal = [];
//   while (OOO < 1) 
//   {
//     let e = start
//     while (e > 0) {
//         teste = start % e
//         if(teste == 0) {resultadoLocal.push(e)}
//         e--}
//         // console.log(resultadoFinal)
// //    resultadoLocal = []
//     if(resultadoLocal.length == 2) {
//         resultadoFinal.push(start)
//     }
//      OOO++ 
//      start+
//      }

// console.log(resultadoFinal)
//CALCULAR A SOMA DOS NÚMEROS DE 1 A 1000
/*
let n = 0
let somaFinal = 0;
while (n <= 1000)
{
    somaFinal += n
    n++
}
console.log(somaFinal)
*/
