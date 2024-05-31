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

    case 20: // NÃO ENTENDI OQ ESSA QUESTÃO TA QUERENDO
    let reg = {
        Matrícula: "",
        Nome: "",
        Bruto: "",
        INSS: "12%",
        Líquido: "",
    }
break;

case 21:
    function ideal (alt,sexo){
        let peso 
        if (sexo == "m"){
            peso = 72.7 * alt -  58
        } else {
            peso = 62.1 * alt - 44.7
        } return peso
    }   
    let height
    let gend
    do {
        height = prompt(`Insira sua altura: `)
    }  while (height % 1 != 0)
    do {
        gend = prompt(`Insira seu sexo (m ou f): `)
    } while (gend != 'm' && gend != 'f')
    console.log(ideal (height, gend))
break

case 22:
    let rendas = Array()
    let filhos = Array()
    let rendaMenor = Array()
    let somaRendas = 0
    let somaFilhos = 0
    let maior = 0
    function citzen (yeld, family){
        rendas.push(yeld)
        filhos.push(family)
        for (renda of rendas){
            somaRendas = parseFloat(somaRendas) + parseFloat(renda)
            if (parseFloat(maior) < parseFloat(renda)) {maior = renda}
            
        }  
        if (parseFloat(renda) <= 350) {rendaMenor.push(renda)}
        for (filho of filhos){
            somaFilhos = parseFloat(somaFilhos) + parseFloat(filho)
        }  
        return console.log(`
            Média Salarial: R$${(somaRendas/rendas.length)}
            Média de filhos: ${somaFilhos/filhos.length}
            Maior salário: R$${(maior)}
            Percentual menor que R$350: ${(rendaMenor.length/rendas.length)*100}%
            `)
    }
    do {
        citzen (prompt(`Insira a renda do habitante: `), prompt(`Insira a quantidade de filhos do habitante: `))
        // console.log (rendas)
        // console.log (somaRendas)
        somaRendas = 0
        somaFilhos = 0
        console.log(rendas)
        console.log(rendaMenor)
    } while (prompt('deseja inserir mais um? (s=sim): ') == "s")
break;

case 23: //Qual o tamanho máximo da matriz?
    let Tamanho = prompt('Qual o tamanho da matriz: ')
    let Ident = Array();
    for (let i = 0; i < Tamanho ; i++) {
        Ident[i] = [];
        for (let j = 0; j < Tamanho; j++){
        Ident[i].push([0]); 
        }
        Ident[i][i] = [1];
    }
    console.log(Ident)
break

case 24: // Fica estranho em 6x8 como foi pedido, vou fazer em 8x6
 let Matriz = Array()
 let neg = 0
 let random
 for(i=0;i<8;i++){
    Matriz[i] = Array()
    Matriz[i].push(Array())
        for(j=0;j<6;j++){
            if (j<5){
                random = ((Math.round(Math.random())*2-1)*Math.floor(Math.random()*5))
                Matriz[i][0].push(random)
               if (random < 0) {neg ++}
            } else {       
                Matriz[i][0].push(`${neg}`)
                neg = 0
            }
        }
    }
    console.log(Matriz)
break;

case 25:
    let soMatriz = Array()
    let columnSoma = 0
    for (i=0;i<4;i++){
        soMatriz[i] = Array()
        soMatriz[i].push(Array())
        for (j=0;j<5;j++){
            soMatriz[i][0].push(Math.floor(Math.random()*5+1))
        }
    }
    for (i=0;i<5;i++){
        for (index of soMatriz){
            if (soMatriz.indexOf(index) < 3){
                columnSoma += index[0][i]
            } else {
                columnSoma += index[0][i]
                console.log(`Soma da coluna ${i+1}: ${columnSoma}`)
                columnSoma = 0
            }
            // console.log(`${index[0][i]} & ${soMatriz.indexOf(index)} & ${columnSoma}`)
        }
    }
    console.log(soMatriz)
break;

case 26:
    let Matriz1 = Array()
    let Matriz2 = Array()
    let MatrizP = Array()
    for (i=0;i<5;i++){
        Matriz1[i] = Array()
        Matriz1[i].push(Array())
        for (j=0;j<3;j++){
            Matriz1[i][0].push(Math.floor(Math.random()*5+1))
        }
    }
    for (i=0;i<5;i++){
        Matriz2[i] = Array()
        Matriz2[i].push(Array())
        for (j=0;j<3;j++){
            Matriz2[i][0].push(Math.floor(Math.random()*5+1))
        }
    }
    for (i=0;i<(Matriz1.length);i++){
        MatrizP[i] = Array()
        MatrizP[i].push(Array())
        for (j=0;j<(Matriz1[i][0].length);j++){
            MatrizP[i][0].push(Matriz1[i][0][j] * Matriz2[i][0][j])
        }      
    }
    console.log(Matriz1)
    console.log(Matriz2)
    console.log(MatrizP)
break;

case 27:
    let multMatriz = Array()
    let multVetor = Array()
    let A = prompt("Insira o valor multiplicador: ")
    for (i=0;i<6;i++){
        multMatriz[i] = Array()
        multMatriz[i].push(Array())
        for (j=0;j<6;j++){
            multMatriz[i][0].push(Math.floor(Math.random()*5+1))
            multVetor.push(multMatriz[i][0][j] * A)
        }
    }
    console.log (multMatriz)
    console.log (multVetor)
break;

case 28:
    let matriz10x10 = Array()
    let itemA = 0
    let itemB = 0
    for (i=0;i<10;i++){
        matriz10x10[i] = Array()
        for (j=0;j<10;j++){
            matriz10x10[i].push(Math.floor(Math.random()*5+1))
        }
    }
    console.log(matriz10x10)
    for (i=0;i<matriz10x10.length;i++){
        if (i<matriz10x10.length-1){
        itemA += matriz10x10[i][i+1]}
        if (i>0){itemB += matriz10x10[i][i-1]}
    }
    console.log(`Soma dos elementos acima da diagonal principal ${itemA}`)
    console.log(`Soma dos elementos abaixo da diagonal principal ${itemB}`)
break;

case 29:
    let matriz29 = Array()
    let somaLinha4 = 0
    let somaColuna2 = 0
    let somadiagP = 0
    let somaTotalM24 = 0
    for (i=0;i<5;i++){
        matriz29[i] = Array()
        for (j=0;j<5;j++){
            matriz29[i].push(Math.floor(Math.random()*5+1))
            if (i == 3){
                somaLinha4 += matriz29[i][j]
            }
            if (j == 1){
                somaColuna2 += matriz29[i][j]
            }
            if (i == j){
                somadiagP += matriz29[i][j]
            }
            somaTotalM24 += matriz29[i][j]
        }
    }
    console.log(matriz29)
    console.log(somaLinha4)
    console.log(somaColuna2)
    console.log(somadiagP)
    console.log(somaTotalM24)
break;

case 30:
    let matriz30 = Array()
    let SL = Array()
    let SC = Array()
    let rascunho = 0
    for (i=0;i<5;i++){
        matriz30[i] = Array()
        for (j=0;j<5;j++){
            matriz30[i].push(Math.floor(Math.random()*5+1))
            rascunho += matriz30[i][j]
        }
        SL.push(rascunho)
        rascunho = 0
    }
    console.log(`Matriz gerada:`)
    console.log(matriz30)
    for (i=0;i<matriz30.length;i++){
       for (index of matriz30){
        // console.log(index[i])
        rascunho += index[i]
       }
       SC.push(rascunho)
       rascunho = 0
    }
    console.log(`Vetor das somas das linhas:`)
    console.log(SL)
    console.log(`Vetor das somas das colunas:`)
    console.log(SC)
break;

case 31:
        let intA = prompt('Insira um número inteiro')
        let matriz31 = Array()
        let intAmount = 0
        let notAmatriz = Array()
    for (i=0;i<30;i++){
        matriz31[i] = Array()
        notAmatriz[i] = Array()
        for (j=0;j<30;j++){
            matriz31[i].push(Math.floor(Math.random()*10))
            if (matriz31[i][j] == intA){
                intAmount ++
            } else { if (notAmatriz[i].length < 30){
                    notAmatriz[i].push(matriz31[i][j])
                }   
            }
        } 
    } 
    
    console.log(`Matriz gerada: `)
    console.log(matriz31)
    console.log("-----------------------------------")
    console.log(`Quantidade de aparições de ${intA} na matriz: ${intAmount}`)
    console.log(`Matriz gerada sem o número ${intA}: `)
    console.log(notAmatriz)

break;

case 32:
    let matriz32 = Array()
    let matrizDiv32 = Array()
    let DivDaLinha = 0
    for (i=0;i<12;i++){
        matriz32[i] = Array()
        matrizDiv32[i] = Array()
        for (j=0;j<13;j++){
            matriz32[i].push(Math.floor(Math.random()*10+1))
            if (DivDaLinha < matriz32[i][j]) {
                DivDaLinha = matriz32[i][j]
            }
        }
        for (j=0;j<matriz32[i].length; j++){
            matrizDiv32[i].push(matriz32[i][j] / DivDaLinha)
        }
        DivDaLinha = 0
    }
    console.log(`Matriz gerada inicialmente:`)
    console.log(matriz32)
    console.log(`----------------------------`)
    console.log(`Matriz gerada com a divisão:`)
    console.log(matrizDiv32)
break;

case 33:
    let matriz33 = Array()
    let média33 = 0
    console.log(`Matriz gerada:`)
    for (i=0;i<3;i++){
        matriz33[i] = Array()
        for (j=0;j<3;j++){
            matriz33[i].push(Math.floor(Math.random()*10+1))
        }
        média33 += matriz33[i][matriz33[i].length - i - 1]
        console.log(matriz33[i])
    }
    console.log(`Média dos elementos da diagonal secundária: ${média33/matriz33.length}`)
    for (i=0;i<matriz33.length;i++){
        console.log(`${média33/matriz33.length} x ${matriz33[i][i]} = ${(média33/matriz33.length)* matriz33[i][i]}`)
    }
break;

case 34:
    let matriz34 = Array()
    let multMatriz34 = Array()
    let diagElement34
    for (i=0;i<5;i++){
        matriz34[i] = Array()
        for (j=0;j<5;j++){
            matriz34[i].push(Math.floor(Math.random()*10+1))
            if (i == j) { diagElement34 = matriz34[i][j]}
        }
        multMatriz34[i] = Array()
        for (j=0;j<matriz34[i].length;j++)  {
            multMatriz34[i].push(diagElement34 * matriz34[i][j])
        }
    }
    console.log("Matriz gerada inicialmente:")
    console.log(matriz34)
    console.log("Matriz produto:")
    console.log(multMatriz34)
break;

}
