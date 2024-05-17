/*_________________________LISTA DE EXERCÍCIOS 1_______________________________
ALUNO: HELENALDO DA SILVA
CADA EXERCÍCIO POSSUI O SEU PRÓPRIO CASE QUE CORRESPONDE AO SEU NÚMERO NA LISTA
DE EXERCÍCIOS 1. É NECESSÁRIO EXECUTAR O PROGRAMA COM "node Lista1.js" NO 
TERMINAL E EM SEGUIDA INSERIR O NÚMERO RESPECTIVO DA ATIVIDADE. QUANDO A
EXECUÇÃO DO EXERCÍCIO FINALIZAR, É NECESSÁRIO EXECUTAR O PROGRAMA E INSERIR 
O CASE NOVAMENTE PARA TESTAR O PRÓXIMO OU O MESMO EXERCÍCIO NOVAMENTE */

const prompt = require('prompt-sync')();
let Exercício = prompt('Digite o Número do exercício: ')

switch (parseInt(Exercício)){
case 1:
let C = parseFloat(prompt('Inserir valor da temperatura em graus Celsius: '))
let F = (C * 9/5) + 32
console.log(F + " Graus Fahrenheit")
break;

case 2:
let Eleitores = parseInt(prompt('Quantidade de eleitores: '))
let VB = parseInt(prompt('Quantidade de votos brancos: '))
let VN = parseInt(prompt('Quantidade de votos nulos: '))
let VV = parseInt(prompt('Quantidade de votos válidos: '))
if (Eleitores >= VB + VN + VV) { 
    console.log(VB/Eleitores * 100 + "% votos brancos")
    console.log(VN/Eleitores * 100 + "% votos nulos")
    console.log(VV/Eleitores * 100 + "% votos válidos")}
else {console.log("Qauntidade de votos inválida. Por favor, revise os dados.")}
break;

case 3:
let Int1 = parseInt(prompt('1º Númro inteiro: '))
let Int2 = parseInt(prompt('2º Númro inteiro: '))
let Int3 = parseInt(prompt('3º Númro inteiro: '))
let Int4 = parseInt(prompt('4º Númro inteiro: '))
console.log(`${Int1} + 25 = ${Int1 +25} `)
console.log(`${Int2} * 3 = ${Int2 * 3}`)
console.log(`${Int3} * 0.12 = ${Int3 * 0.12}`)
 console.log(`${Int4} = ${Int1 + Int2 + Int3}`)
break;

case 4:case 5:
let nota1 = parseFloat(prompt('Insira a nota da primeira avaliação: '))
let nota2 = parseFloat(prompt('Insira a nota da segunda avaliação: '))
let media = (nota1 + nota2) / 2
if (media >= 6) {console.log("PARABÉNS! Você foi aprovado")}
else {console.log("Você foi REPROVADO! Estude mais")}
break;

case 6:
let LadoA = parseFloat(prompt('Insira o lado A do triângulo: '))
let LadoB = parseFloat(prompt('Insira o lado B do triângulo: '))
let LadoC = parseFloat(prompt('Insira o lado C do triângulo: '))
if (LadoA < LadoB + LadoC && LadoB < LadoA + LadoC && LadoC < LadoB + LadoA) {
    if (LadoA===LadoB && LadoB===LadoC) {console.log("Triângulo equilátero")}
    else if (LadoA===LadoB || LadoB===LadoC || LadoA===LadoC) {console.log("Triângulo Isósceles")}
    else if (LadoA!==LadoB && LadoB!==LadoC && LadoA!==LadoC) {console.log("Triângulo escaleno")}
} else {console.log("Os lados inseridos não formam um Triângulo")}
break;

case 7:
let maça
let preço
do {maça = prompt('Insira a quantidade de maçãs desejada: ')
if (maça % 1 != 0){
    console.log('Por favor, insira um número inteiro.')}}
while (maça % 1 != 0)
if (maça < 12 && maça > 0 ) {
    preço = maça * 0.3
    console.log(`Custo da compra: R$ ${preço.toFixed(2)}`)}
else if (maça >= 12) {
    preço = maça * 0.25
    console.log(`Custo da compra: R$ ${preço.toFixed(2)}`)}
else {console.log('Quantidade inválida de maçãs.')}
break;

case 8:
    let numero1 = parseFloat(prompt('Insira o primeiro número: '))
    let numero2 = parseFloat(prompt('Insira o segundo número: '))
    if (numero1<numero2){console.log(`${numero1}, ${numero2}`)}
    else {{console.log(`${numero2}, ${numero1}`)}}
break;

case 9:
    let código = prompt('Insira o cóigo de origem do produto: ')
    let origem;
    if  (código >= 10 && código <= 20) {origem = 10}
    else if (código >= 25 && código <= 50) {origem = 11}
    else {origem = código}
    
    switch (parseFloat(origem)){
        case 1:
            console.log('O produto vem da região Sul')
        break;
        case 2:
            console.log('O produto vem da região Norte')
        break;
        case 3:
            console.log('O produto vem da região Leste')
        break;
        case 4:
            console.log('O produto vem da região Oeste')
        break;
        case 5: case 6:
            console.log('O produto vem da região Nordeste')
        break;
        case 7: case 8: case 9:
            console.log('O produto vem da região Sudeste')
        break;
        case 10:
            console.log('O produto vem da região Centro-Oeste')
        break;
        case 11:
            console.log('O produto vem da região Noroeste')
        break;
        default:
            console.log('O produto é importado')
    }
break;

case 10:
let INTEIRO 
let IMPRESSÕES = 0
do {INTEIRO = prompt('Insira um número inteiro: ')
if (INTEIRO % 1 != 0) {
    console.log('O valor inserido não é um número inteiro!')}}
while (INTEIRO % 1 != 0)
while (IMPRESSÕES < 10) {console.log(INTEIRO) 
    IMPRESSÕES++}
break;

case 11:
    let dado = prompt('Insira um valor de entrada: ')
    while (dado >= 0 && dado % 1 == 0)  {
        if (dado % 2 == 0){console.log(`O número ${dado} é par`)}
        else {console.log(`O número ${dado} é impar`)}
        dado = prompt('Insira o próximo de entrada: ')} 
break;

case 12:
    let dividendo = 1000
    while (dividendo <= 1999) {
        if (dividendo % 11 === 5) {console.log(dividendo)}
        dividendo++}
break;

case 13:
        let f1 = prompt('Escolha o valor 1: ')
        let f2 = prompt('Escolha o valor 2: ')
        let f3 = prompt('Escolha o valor 3: ')
        let f4 = prompt('Escolha o valor 4: ')
        let f5 = prompt('Escolha o valor 5: ')
        let Multiplicador = 1
        while (f1 >= Multiplicador){
            console.log(`${Multiplicador} x ${f1} = ${Multiplicador * f1}`)
            Multiplicador++}
        Multiplicador = 1
        while (f2 >= Multiplicador){
            console.log(`${Multiplicador} x ${f2} = ${Multiplicador * f2}`)
            Multiplicador++}
        Multiplicador = 1
        while (f3 >= Multiplicador){
            console.log(`${Multiplicador} x ${f3} = ${Multiplicador * f3}`)
            Multiplicador++}
        Multiplicador = 1
        while (f4 >= Multiplicador){
            console.log(`${Multiplicador} x ${f4} = ${Multiplicador * f4}`)
            Multiplicador++}
        Multiplicador = 1
        while (f5 >= Multiplicador){
            console.log(`${Multiplicador} x ${f5} = ${Multiplicador * f5}`)
            Multiplicador++}
        Multiplicador = 1
break;

case 14: 
let input = 'X'
let soma = 0;
let Divisor = []
while(input != 0) {
    input = prompt('Insira números decimais (apenas) ou 0 para obter a média: ')
    if (input % 1 > 0) {
        {soma = parseFloat(input) + parseFloat(soma)
        Divisor.push(input)}}
    else if (input % 1 == 0 && input != 0) 
        {console.log(`"${input}" Não é um número Decimal. Tente novamente.`)}
    else if (input % 1 < 0)
        {console.log(`"${input}" Não é um número Negativo. Tente novamente.`)}}
console.log(soma / Divisor.length)
break;

case 15:
let Decimal = []
let Peso = []
let Entrada = "X"
let Posição = 0
let Mult = 0
let Soma = 0
while ( Entrada != 0){
    Entrada = prompt(`Decimal Nº${Posição + 1}: `)
    if (Entrada % 1 > 0) {
        Decimal.push(Entrada)
        do {Entrada = prompt(`Peso Nº${Posição + 1}: `)
            if (Entrada < 0) {console.log('Favor iniserir apenas valores positivos')} 
            else if (Entrada != 0 && !(Entrada > 0)){console.log('O valor não é um número')}}
        while (!(Entrada >= 0))
        if (Entrada > 0) {
            Peso.push(Entrada)
            Mult = parseFloat(Peso[Posição]) * parseFloat(Decimal[Posição]) + parseFloat(Mult)
            Soma = parseFloat(Peso[Posição]) + parseFloat(Soma)
            Posição++}}
        else if (Entrada == 0){}
    else if (Entrada == 0) {}
    else if (Entrada < 0) {console.log('Favor iniserir apenas valores positivos')}
    else {console.log('Entrada não é um número Decimal')}}
  let Ponderada = Mult/Soma
  console.log(Ponderada)
break;

case 16:
    let start = 100
    let teste
    let divTestado
    let Divisores = []
    let primos = []
    while (primos.length < 50) {
        while (start - divTestado >= 0) {
            teste = start % divTestado
            if (teste == 0) { Divisores.push(divTestado) }
            divTestado++}
        if (Divisores.length == 2) { primos.push(start) }
        start++
        divTestado = 0
//console.log(Divisores)
        Divisores = [];}
    console.log(primos)
//console.log(primos.length)
break;
default:
    console.log("Exercício não encontrado")}