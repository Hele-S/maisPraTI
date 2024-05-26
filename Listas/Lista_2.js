/*_________________________LISTA DE EXERCÍCIOS 1_______________________________
ALUNO: HELENALDO DA SILVA
CADA EXERCÍCIO POSSUI O SEU PRÓPRIO CASE QUE CORRESPONDE AO SEU NÚMERO NA LISTA
DE EXERCÍCIOS 1. É NECESSÁRIO EXECUTAR O PROGRAMA COM "node Lista1.js" NO 
TERMINAL E EM SEGUIDA INSERIR O NÚMERO RESPECTIVO DA ATIVIDADE. QUANDO A
EXECUÇÃO DO EXERCÍCIO FINALIZAR, É NECESSÁRIO EXECUTAR O PROGRAMA E INSERIR 
O CASE NOVAMENTE PARA TESTAR O PRÓXIMO OU O MESMO EXERCÍCIO NOVAMENTE */

const prompt = require('prompt-sync')();
let Exercício = prompt('Digite o Número do exercício: ')
//console.log("deu bom")
switch (parseInt(Exercício)){
    
    case 1:
        let cig = prompt('Quantos cigarros por dia você fuma? ')
        let anosFumando = prompt('Você fuma a quantos anos? ')
        let diasPerdidos = (cig * 10 / 60) * (365 * anosFumando) / 24
        console.log(`Fumando ${cig} cigarros por dia, por ${anosFumando} anos, você perdeu no total ${diasPerdidos.toFixed(0)} dias de vida`)
    break;

    case 2:
        let km = prompt('O carro está em quantos kM/h? ')
        if (km > 80){
            console.log(`Velocidade máxima excedida! multa de R$${((km - 80) * 5).toFixed(2)} !`)
        } else {console.log(`Velocidade dentro do permitido.`)}
    break;

    case 3:
        let kmPercorridos = prompt('Quantos quilometros deseja percorrer? ')
        if (kmPercorridos <= 200) {
            console.log(`Valor da corrida: R$${(kmPercorridos * 0.5).toFixed(2)}`)
        } else {console.log(`Valor da corrida: R$${(kmPercorridos * 0.45).toFixed(2)}`)}
    break;

    case 4:
    let LadoA = parseFloat(prompt('Insira o tamanho da primeira reta: '))
    let LadoB = parseFloat(prompt('Insira o tamanho da segunda reta: '))
    let LadoC = parseFloat(prompt('Insira o tamanho da terceira reta: '))
    if (LadoA < LadoB + LadoC && LadoB < LadoA + LadoC && LadoC < LadoB + LadoA) {
        console.log('As retas podem furmar um triângulo!')
    }   else { console.log('As retas não podem formar um triângulo...')}
    break;

    case 5:
        let player1
        let player2
        while (player1 == player2)  {
            do{ player1 = prompt('JOGADOR 1 (Pedra = 1; Papel = 2; Tesoura = 3) :')}
            while (!(player1 == 1 | player1 == 2 | player1 == 3))
            do{ player2 = prompt('JOGADOR 2 (Pedra = 1; Papel = 2; Tesoura = 3) :')}
            while (!(player2 == 1 | player2 == 2 | player2 == 3))
            if (player1 == player2) {console.log("EMPATE! JOGUEM NOVAMENTE")}
        }
        if ((player1 == 1 && player2 == 3)|(player1 == 2 && player2 == 1)|(player1 == 3 && player2 == 2)){ console.log(`JOGADOR 1 VENCEU! (${player1} vs ${player2}) (Pedra = 1; Papel = 2; Tesoura = 3)` )
        } else {console.log(`JOGADOR 2 VENCEU! (${player1} vs ${player2}) (Pedra = 1; Papel = 2; Tesoura = 3)`)}
    break;

    case 6:
        let sort = (Math.floor((Math.random() * 5)+ 1))
        let guess
        do {guess = prompt('Adivinhe o número sorteado (1 a 5): ')
            if (guess == sort){
                console.log('Parabéns! Você acertou!')
            } else {
                console.log('Errou! Tente novamente!')
            }
        } while (guess != sort)
    break;

    case 7:
        let type 
        let days = prompt('Por quantos dias o carro será alugado? ')
        let mileage = prompt('Quantos quilometros serão percorridos? ')
        do{type = prompt('Qual o tipo do carro? (popular: digite 1; luxo: digite 2): ')
            if (type == 1) {
                if (mileage > 100) {
                    console.log(`Valor a pagar: R$${mileage * 0.1 + days * 90}`)
                } else if (mileage <= 100) {
                    console.log(`Valor a pagar: R$${mileage * 0.2 + days * 90}`)
                }
            } else if (type == 2) {
                if (mileage > 200) {
                    console.log(`Valor a pagar: R$${mileage * 0.25 + days * 150}`)
                }
                if (mileage <= 200) {
                    console.log(`Valor a pagar: R$${mileage * 0.3 + days * 150}`)
                }
            } else {console.log('Tipo não reconhecido...')}
        } while (!(type == 1 | type == 2))
    break;

    case 8:
        let hours = prompt('Quantas horas foram investidas no mês? ')
        let score
        if (hours <= 10){score = hours * 2}
        if (hours > 10 && hours <= 20){score = hours * 5}
        if (hours > 20){score = hours * 10}
        if (score > 0) {console.log(`Valor total a receber R$${(score * 0.05).toFixed(2)}`)
        } else {console.log('Quantidade inválida de horas')}
    break;

    case 9:
        let employees = Array()
        let SumM = 0
        let SumF = 0
        do {
            employees.push({
                Nome: prompt('Insira o nome do funcionário: '),
                Salario: prompt('Insira o salário do funcionário em reais: '),
                Sexo: prompt('Insira o sexo do funcionário (m ou f): ')
            })
        } while (prompt('Para adicionar mais um funcionário digite "S", caso contrário, digite qualquer outra coisa: ') == 'S')
        for (let employee of employees){
            if (employee.Sexo == "f"){
                SumF += parseFloat(employee.Salario)
            } else if (employee.Sexo == "m"){
                SumM += parseFloat(employee.Salario)
            }else {console.log(`Funcionário(a) "${employee.Nome}" recebeu um valor sexo inválido, Portanto não será incluido na soma`)
        }}
        console.log(`Total de pagamento às funcionárias do sexo feminino: R$${SumF.toFixed(2)}`)
        console.log(`Total de pagamento aos funcionários do sexo masculino: R$${SumM.toFixed(2)}`)
    break;

    case 10:
        let Sum = 0
        let evenAmount = 0
        let Lowest
        let Arr = Array()
        let current 
        do { current = prompt(`Insira o valor Nº${Arr.length + 1}: `)
        Sum += parseFloat(current)
        Arr.push(current)
        if (Arr.length == 1){
           Lowest = current
        } else if (parseFloat(Lowest) > parseFloat(current)) {
            Lowest = current
        }
        if (current % 2 == 0) {
           evenAmount ++
        }
        } while (prompt('Deseja acrescentar um valor? (Sim = S): ') == 'S')
        console.log(`Somatório dos valores ${Sum}`)
        console.log(`O menor valor inserido foi ${Lowest}`)
        console.log(`A média dos valores é ${(Sum/Arr.length)}`)
        console.log(`Houveram ${evenAmount} valores pares`)
    break;

    case 11:
        let PA = Array()
        let First = parseFloat(prompt('Qual o primeiro valor da PA? '))
        let Raz = prompt('Qual a razão da PA? ')
        let Soma = 0
        PA.push(First)
        while (PA.length < 10){
            Soma += First
            First += parseFloat(Raz)
            PA.push(First)
        }
        Soma += First
        console.log(PA)
        console.log(Soma)
    break;

    case 12:
        let casalFilhote = 1
        let Cresceram = 0
        let casalAdulto = 0
        for (i = 0; i<10; i++){
            console.log(casalAdulto + casalFilhote)
            Cresceram = casalFilhote
            casalAdulto += Cresceram
            casalFilhote = casalAdulto
            casalFilhote -= Cresceram
        }
        break;
        
    case 13:
        let Young = 1
        let Growing = 0
        let Adult = 0
        let Fibonacci = Array()
        while (Fibonacci.length < 15) {
            Fibonacci.push(Adult + Young)
            Growing = Young
            Adult += Growing
            Young = Adult
            Young -= Growing
        }
        console.log(Fibonacci)
    break;

    case 14:
        let nomeAtual
        let nomes = Array()
        do {nomeAtual = prompt(`Insira o nome de alguém (${nomes.length + 1}/7)`)
            nomes.unshift(nomeAtual)
        } 
        while(nomes.length < 7)
        for (nome of nomes) {
        console.log(nome)}
    break;

    case 15:
        let nmbr
        let vector = Array()
        do {nmbr = prompt(`Insira números inteiros (${vector.length + 1}/10)`)
            if (nmbr % 1 == 0) {
                vector.push(nmbr)
            }   
        } while (vector.length < 3)
        for (element of vector){
            if (element % 2 == 0) {
                console.log(``)
                console.log(`O valor ${element}, na posição ${vector.element} é par`) // Se colocar 2 pares iguais na array ele só localiza o primeiro!!!!!!!
            }
        }
    break;

    case 16:
        let desOrdem = Array()
        let novoMaior
        while (desOrdem.length<20){
            desOrdem.push(Math.floor(Math.random() * 100))
        }   
        console.log(desOrdem)
        for (i=0;i<20;i++){
            for (j=0;j<20;j++){
                if (desOrdem[i] < desOrdem[j]) {
                    novoMaior = desOrdem[j]
                    desOrdem[j] = desOrdem[i]
                    desOrdem[i] = novoMaior
                }
            }
        }
        console.log(desOrdem)
    break;

    case 17:
        let names = Array()
        let ages = Array()
        do {
            names.push(prompt(`Qual o nome do indivíduo? (${names.length + 1}/9): `))
            ages.push(prompt(`Qual a idade desse indivíduo? (${ages.length + 1}/9): `))
        } while (ages.length < 9)
        console.log('Menores de idade:')
        for (i=0;i<ages.length;i++){
            if (parseInt(ages[i])<18){
                console.log(`${names[i]} com ${ages[i]} anos de idade`)
            }
        }
    break;
    
    case 18:
        let register = {
            Nome:"",
            Cargo:"",
            Salario:""
        }
        console.log(register)
        register.Nome = prompt('Nome: ')
        register.Cargo = prompt('Cargo: ')
        register.Salario = prompt('Salario: ')
        console.log(register)
    break;

    case 19:
        let horários = Array()
        let newHor 
        let aux  = 0
        do {newHor = prompt(`Insíra novo horário no formato HH.MM.SS (${horários.length +1}/5)`)
            if (newHor.length == 8){
                for (check of newHor){
                    if (((aux == 2 | aux == 5) && check == ".") | ((aux == 0 | aux == 1 | aux == 3 | aux == 4 | aux == 6 |aux == 7) && check % 1 == 0)){
                            aux++
                        } else {
                            aux = 0
                    }
                }
            }
                if (aux == 8){
                    if (newHor == prompt(`Por favor confirme o horário ${newHor}`))
                        {horários.push(newHor)}
                    aux = 0
                }
            }    
        while (horários.length < 2)
        console.log(horários)
    break;
}