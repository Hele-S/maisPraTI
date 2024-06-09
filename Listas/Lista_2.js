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
    let LadoA = parse(prompt('Insira o tamanho da primeira reta: '))
    let LadoB = parse(prompt('Insira o tamanho da segunda reta: '))
    let LadoC = parse(prompt('Insira o tamanho da terceira reta: '))
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
                SumF += parse(employee.Salario)
            } else if (employee.Sexo == "m"){
                SumM += parse(employee.Salario)
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
        Sum += parse(current)
        Arr.push(current)
        if (Arr.length == 1){
           Lowest = current
        } else if (parse(Lowest) > parse(current)) {
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
        let First = parse(prompt('Qual o primeiro valor da PA? '))
        let Raz = prompt('Qual a razão da PA? ')
        let Soma = 0
        PA.push(First)
        while (PA.length < 10){
            Soma += First
            First += parse(Raz)
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
            if (nmbr % 1 == 0 && nmbr >= 0) {
                vector.push(nmbr)
            }   
        } while (vector.length < 10)
            vector.forEach((element, index) => {
                if (element % 2 == 0) {
                    console.log(`O valor ${element}, na posição ${index} é par`);
                }
            });
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
            Nome:"Não informado",
            Cargo:"Não informado",
            Salario:"Não informado"
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
                    if (newHor == prompt(`Por favor confirme o horário ${newHor}: `))
                        {horários.push(newHor)}
                    aux = 0
                }
            }    
        while (horários.length < 5)
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
                somaFilhos = parseInt(somaFilhos) + parseInt(filho)
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
            somaRendas = 0
            somaFilhos = 0
            // console.log(rendas)
            // console.log(rendaMenor)
        } while (prompt('deseja inserir mais um? (s=sim): ') == "s")
    break;

    case 23:
        let Tamanho = 7
        let Ident = Array();
        for (let i = 0; i < Tamanho ; i++) {
            Ident[i] = [];
            for (let j = 0; j < Tamanho; j++){
            Ident[i].push([null]); 
            }
            Ident[i][i] = [1];
        }
        console.log(Ident)
    break

    case 24: // Fica estranho em 6x8 como foi pedido, vou fazer em 8x6
    let Matriz = Array()
    let neg = 0
    let random
    for(i=0;i<6;i++){
        Matriz[i] = Array()
        Matriz[i].push(Array())
            for(j=0;j<8;j++){
                if (j<7){
                    random = ((Math.round(Math.random())*2-1)*Math.floor(Math.random()*5 + 1))
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
        for (i=0;i<15;i++){
            soMatriz[i] = Array()
            soMatriz[i].push(Array())
            for (j=0;j<20;j++){
                soMatriz[i][0].push(Math.floor(Math.random()*5+1))
            }
        }
        for (i=0;i<20;i++){
            for (index of soMatriz){
                if (soMatriz.indexOf(index) < 14){
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
        console.log(`Soma da linha 4: ${somaLinha4}`)
        console.log(`Soma da coluna 2: ${somaColuna2}`)
        console.log(`Soma da diagonal principal: ${somadiagP}`)
        console.log(`Soma de todos os elementos da matriz: ${somaTotalM24}`)
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
        for (i=0;i<50;i++){
            matriz34[i] = Array()
            for (j=0;j<50;j++){
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

    case 35:
        let valores35 = Array()
        let impares35 = Array()
        let pares35 = Array()
        while (valores35.length<30){
            valores35.push(Math.floor(Math.random()*9 + 1))
        }
        for (index of valores35) {
            if (index % 2 == 0) {
                pares35.push(index)
                if (pares35.length == 5) {
                    console.log(`Vetor par:`)
                    console.log(pares35)
                    pares35 = []
                }
            } else {
                impares35.push(index)
                if (impares35.length == 5) {
                    console.log(`Vetor impar:`)
                    console.log(impares35)
                    impares35 = []
                }
            }
        }
    break;

    case 36:
        let gabarito36 = String()
        let apostadores36 = Array()
        let cartão36 = Array()
        let acertos36 = 0
        while (gabarito36.length < 13){
            gabarito36 += Math.floor(Math.random()*5 + 1)
        }
        console.log(`GABARITO : ${gabarito36}`)
        for (i=0;i<100;i++){
            apostadores36.push({
                ID: `Apostador ${apostadores36.length + 1}`,
                CARTÃO: String()
            })
            for (j=0;j<gabarito36.length;j++){
                cartão36 += Math.floor(Math.random()*5 + 1)
            }
            apostadores36[i].CARTÃO = cartão36
            cartão36 = []
            for (j=0;j<gabarito36.length;j++) {
                if (gabarito36[j] == apostadores36[i].CARTÃO[j]) {
                    acertos36++
                }
            }
            console.log(`${apostadores36[i].ID} obteve ${acertos36} acertos36 (${apostadores36[i].CARTÃO})`)
            if (acertos36 == gabarito36.length) {
            console.log(`Parabéns, tu foi o GANHADOR`)
            }
            acertos36 = 0
        }
    break;

    case 37:
        let gabarito37 = String()
        let alunos37 = Array()
        let provas37 = Array()
        let acertos37 = 0
        while (gabarito37.length < 20){
            gabarito37 += Math.floor(Math.random()*2)
        }
        console.log(`GABARITO : ${gabarito37}`)
        for (i=0;i<50;i++){
            alunos37.push({
                ID: `Aluno ${alunos37.length + 1}`,
                RESULTADO: String()
            })
            for (j=0;j<gabarito37.length;j++){
                provas37 += Math.floor(Math.random()*2)
            }
            alunos37[i].RESULTADO = provas37
            provas37 = String()
            for (j=0;j<gabarito37.length;j++) {
                if (gabarito37[j] == alunos37[i].RESULTADO[j]) {
                    acertos37++
                }
            }
            console.log(`${alunos37[i].ID} obteve ${acertos37} acertos (${alunos37[i].RESULTADO})`)
            if (acertos37 >= 12) {
            console.log(`APROVADO`)
            } else {console.log(`REPROVADO`)}
            acertos37 = 0
        }
    break;

    case 38:
        let vector38 = Array()
        let identi38 
        let aux38
        while (vector38.length < 6){
            vector38.push(Math.floor(Math.random()*5+1))
        }
        console.log(`Vetor gerado:`)
        console.log(vector38)
        do { identi38 = prompt('Insira um número de 1 a 5: ')
        } while (!(identi38 > 0 && identi38 <= 5 && identi38 % 1 == 0))
        switch (identi38){
            case '1':
                aux38 = 0
                for (index of vector38){
                    aux38 += parseInt(index)
                }
                console.log(`Soma dos elementos: ${aux38}`)
            break;
            case '2':
                for (index of vector38){
                    if (typeof(aux38) === 'undefined'){
                        aux38 = index
                    } else {aux38 *= index}
                }
                console.log(`Produto dos elementos: ${aux38}`)
            break;
            case '3':
                aux38 = 0    
                for (index of vector38){
                    aux38 += parseInt(index)
                }
                console.log(`Média dos elementos: ${aux38/vector38.length}`)
            break;
            case '4':
                for (i=0;i<vector38.length;i++){
                    for (j=0;j<vector38.length-1;j++){
                        if (vector38[i]<vector38[j]){
                            aux38 = vector38[i]
                            vector38[i] = vector38[j]
                            vector38[j] = aux38
                        }
                    }
                }
                console.log(`Elementos em ordem crescente: ${vector38}`)
                console.log(vector38)
                break;
            case '5':
                console.log(vector38)
            break;
        }
    break;

    case 39:
        let vector39 = Array()
        let posVector39 = Array()
        let random39
        for (i=0;i<100;i++){
        random39 = ((Math.round(Math.random())*2-1)*Math.floor(Math.random()*5 + 1))
        vector39.push(random39)
        }
        for (index of vector39){
        if (index>0){
            posVector39.push(index)
        }
        }
        console.log(vector39)
        console.log(posVector39)
    break;

    case 40:
        let quina40 = Array(4,21,66,62,68) // Resultado oficial da Quina: Concurso 6455 (01/06/24)
        let apostadores40 = Array()
        let acertos40 = 0
        for (i=0;i<50;i++){
        apostadores40.push({
            ID: `Apostador ${apostadores40.length + 1}`,
            Aposta: Array()
        })
        for (j=0;j<quina40.length;j++){
            apostadores40[i].Aposta.push(Math.floor(Math.random()*80+1))
        }
        for (j=0;j<quina40.length;j++){
            if (apostadores40[i].Aposta[j] == quina40[j]){
            acertos40++ 
            }
        }
        console.log(`${apostadores40[i].ID} acertou ${acertos40} ${apostadores40[i].Aposta}`)
        if (acertos40 == 5 ) {console.log(`Ganhador`)}
        acertos40 = 0
    }
    break;

    case 41: //É só isso mesmo?
        let pessoa = {
            Nome: "Marcelo",
            Idade: "30"
        }
        console.log(pessoa.Idade + " anos")
        pessoa.email = "Marcelinho@gmail.com"
        console.log(pessoa)
    break;

    case 42:
        let dados42 = {
            String1: 'lorem',
            Number1: 0,
            Array1: Array("H","E","L","L","O"),
            String2: 'ipsum',
            Number2: 1,
            Array2: Array("W","O","R","L","D")
        }
        let arrays42 = Object({})
        for (index in dados42){
            if (typeof(dados42[index]) === "object") {
            arrays42[index] = dados42[index]
            }
        }
        console.log(arrays42)
    break;

    case 43:
        let obj1_43 = {
            prioridade: "MENOR",
            cor:"vermelho",
            numero: 0,
            dia:"segunda",
            nome: "Objeto 1",
            animal: "gato"
        }
        let obj2_43 = {
            prioridade: "MAIOR",
            nome: "Objeto 2",
            pais: "Brasil",
            cor:"azul",
            hotel: "trivago"
        }
        let obj3_43 = {}
        for (index in obj1_43) {
            obj3_43[index] = obj1_43[index] 
        }
        for (index in obj2_43) {
            obj3_43[index] = obj2_43[index] 
        }
        console.log("OBJETO 1")
        console.log(obj1_43)
        console.log("OBJETO 2")
        console.log(obj2_43)
        console.log("OBJETO 3")
        console.log(obj3_43)
    break;

    case 44:
        let obj44 = {
            String1: 'lorem',
            Number1: 0,
            Array1: Array("H","E","L","L","O"),
            String2: 'ipsum',
            Number2: 1,
            Array2: Array("W","O","R","L","D")
        }
        let strings44 = function (objeto) {
            let result = 0
            for (index in objeto){
                if (typeof(objeto[index]) === "string") {
                    result ++
                }
            }
            return result
        }
        console.log(strings44(obj44)) 
    break;

    case 45:
        let array45 = Array("H","E","L","L","O","W","O","R","L","D")
        let objeto45 = {}
        for (index of array45){
        if(objeto45[index] > 0){
                objeto45[index] += 1
            } 
        else {
                objeto45[index] = 1    
            } 
        }
        console.log(array45)
        console.log(objeto45)
    break;

    case 46:
        let vendas46 = Array(
            {Vendedor: "Arthur", 'Valor(R$)': 1000.00},
            {Vendedor: "Tiago", 'Valor(R$)': 1200.00},
            {Vendedor: "Arthur", 'Valor(R$)': 3000.00},
            {Vendedor: "Arthur", 'Valor(R$)': 1700.00},
            {Vendedor: "Tiago", 'Valor(R$)': 2500.00},
            {Vendedor: "Arthur", 'Valor(R$)': 2100.00})
        let sumario46 = Object()
        for (index in vendas46){
            if(sumario46[`Nº de vendas do ${vendas46[index]['Vendedor']}`] > 0){
                sumario46[`Nº de vendas do ${vendas46[index]['Vendedor']}`] += 1
            } 
            else {
                sumario46[`Nº de vendas do ${vendas46[index]['Vendedor']}`] = 1    
            } 
        }
        console.log(sumario46) 
    break;

    case 47: // Não entendi direito bora perguntar no final
    break;

    case 48:
    let inventárioLojaA = {
        canetas: 500,
        borrachas: 300,
        lapis: 800,
        tesouras: 400
    }
    let inventárioLojaB = {
        canetas: 150,
        lapiseiras: 300,
        lapis: 250,
        reguas: 600
    }
    function somaInvent (loja1, loja2){
        let soma = {}
        for (index in loja1) {
            soma[index] = loja1[index]
        }
        for (index in loja2) {
            if (soma[index] > 0){
                soma[index] += loja2[index]
            } else {
                soma[index] = loja2[index]
            }
        } return soma
    } 
    console.log(somaInvent(inventárioLojaA,inventárioLojaB))
    break;

    case 49:
        let transações49 = {
            'ID':Array("a","b","c","d","e","f"),
            'Valor(R$)': Array(100,350,260,400,290,180),
            'Data':Array("03/06/2024","02/06/2024","01/06/2024","31/05/2024","30/05/2024","29/05/2024"),
            'Categoria':Array("Q","W","Q","E","E","W")
        }
        let porCategoria49 = Object()
        let soma49 = 0
        for (i=0;i<transações49.Categoria.length;i++){
            if (typeof(porCategoria49[transações49.Categoria[i]]) === "object" ){
                porCategoria49[transações49.Categoria[i]].push(transações49['Valor(R$)'][i])
            } else {
                porCategoria49[transações49.Categoria[i]] = Array()
                porCategoria49[transações49.Categoria[i]].push(transações49['Valor(R$)'][i])
            }
        }
        console.log(`Novo objeto:`)
        console.log(porCategoria49)
        for (i in porCategoria49){
            for (j of porCategoria49[i]){
                soma49 += j
            }
            console.log(`Soma do total Categoria ${i}: ${soma49}`)
            soma49 = 0
        }
    break;

    case 50:
        let verificação50
        let lastHotelID = 0
        let lastReservID = 0
        let Hotéis50 = [{
            ID: 0,
            Nome: `Hotel principal`,
            Cidade: `NH`,
            Registro: "Hotel criado com sucesso!\n--------------------------------------------\n",
            Avaliacoes: Array(),
            Quartos_totais: 20,
            Quartos_disponiveis: 2,
        }]
        Object.defineProperty(Hotéis50[0], "Registro", {enumerable: false})
        let Reservas50 = [{
            IDreserva: 0,
            IDhotel: 0,
            nomeCliente: `Gerivaldo`
        }]
        do {
            funcionalidade = prompt('Qual funcinalidade deseja acesar? (1 = Adicionar hotel) (2 = Buscar hotéis por cidade) (3 = Fazer reserva) (4 = Cancelar reserva) (5 = Listar reservas) (6 = Visualizar relatórios de ocupação) (7 = Adicionar uma avaliação) (outro = Encerrar algoritmo): ')
            verificação50 = false
            switch (parseInt(funcionalidade)) {
                case 1: //Criar Hotel
                    Hotéis50.push({
                        ID: lastHotelID + 1,
                        Nome: prompt('Nome do Hotel: '),
                        Cidade: prompt('Cidade do Hotel: '),
                        Registro: "Hotel criado com sucesso!\n--------------------------------------------\n",
                        Avaliacoes: Array(),
                        Quartos_totais: parseInt(prompt('Quartos totais: ')),
                    })
                    Object.defineProperty(Hotéis50[Hotéis50.length - 1], "Registro", {enumerable: false})
                    while (!(Hotéis50[Hotéis50.length-1].Quartos_totais % 1 == 0 && Hotéis50[Hotéis50.length-1].Quartos_totais > 0 )){
                        Hotéis50[Hotéis50.length-1].Quartos_totais = parseInt(prompt('Quantidade de quartos inválida, por favor insira outro valor: '))
                    }
                    Hotéis50[Hotéis50.length-1]['Quartos_disponiveis'] = Hotéis50[Hotéis50.length-1].Quartos_totais
                    console.log(`Hotel "${Hotéis50[Hotéis50.length-1].Nome}" adicionado com sucesso!!!`)
                    lastHotelID ++
                break
                //-------------------------------
                case 2: //Pesquisar Hotel por Cidade
                    cidade50 = prompt('Qual cidade deseja buscar? ')
                    verificação50 = false
                    for (hotel of Hotéis50){
                        if (hotel.Cidade == cidade50){
                            console.log(`ID: ${hotel.ID}; Nome: ${hotel.Nome}; Cidade: ${hotel.Cidade}; Quartos disponíveis: ${hotel.Quartos_disponiveis}`)
                            if (hotel.Avaliacoes.length > 0){
                                let somaNotas = 0
                                for (nota of hotel.Avaliacoes){
                                    somaNotas += nota[0]
                                }
                                console.log(`Avaliação média : ★ ${(somaNotas/hotel.Avaliacoes.length).toFixed(2)}\n--------------------------------------------`)
                            } else {
                                console.log(`Ainda não possui avaliações\n--------------------------------------------`)
                            }
                            verificação50 = true
                        }
                    }
                    if (verificação50 === false){
                        console.log(`___________________________________________________________________________________________`)
                        console.log(`Desculpe, parece que não temos hotéis na cidade de "${cidade50}". Por favor verique se escreveu corretamente.`)
                        console.log(`___________________________________________________________________________________________`)
                    }
                break;
                //-------------------------------
                case 3: // Criar reserva
                    console.log(`Hotéis disponíveis:`)
                    for (hotel of Hotéis50){
                        console.log(`ID: ${hotel.ID}; Nome: ${hotel.Nome}; Cidade: ${hotel.Cidade}; Quartos disponíveis: ${hotel.Quartos_disponiveis}`)
                        if (hotel.Avaliacoes.length > 0){
                            let somaNotas = 0
                            for (nota of hotel.Avaliacoes){
                                somaNotas += nota[0]
                            }
                            console.log(`Avaliação média : ★ ${(somaNotas/hotel.Avaliacoes.length).toFixed(2)}\n--------------------------------------------`)
                        } else {
                            console.log(`Ainda não possui avaliações\n--------------------------------------------`)
                        }
                    }
                    let IDalvo = parseInt(prompt('Insira o ID do hotel que deseja realizar sua reserva: '))
                    for (hotel of Hotéis50){
                        if (hotel.ID == IDalvo){
                            verificação50 = true
                            if (hotel.Quartos_disponiveis>0){
                                Reservas50.push({
                                    IDreserva: lastReservID + 1,
                                })
                                hotel.Quartos_disponiveis -= 1
                                Reservas50[Reservas50.length -1]['IDhotel'] = IDalvo
                                Reservas50[Reservas50.length -1]['nomeCliente'] = prompt('Insira seu nome para finalizar a operação: ')
                                console.log("Nova reserva criada com sucesso!!!")
                                console.log(Reservas50[Reservas50.length -1])
                                lastReservID++
                                hotel.Registro +=  `Reserva realizada em nome de: ${Reservas50[Reservas50.length -1]['nomeCliente']} (ID: ${Reservas50[Reservas50.length -1]['IDreserva']})\n--------------------------------------------\n`;
                            } else {
                                console.log('_________________________________________________________________________________')
                                console.log(`Desculpe, atualmente o hotel de ID ${hotel.ID} (${hotel.Nome}) Não possui quartos disponíveis. Reinicie a operação e escolha um hotel diferente.`)
                                console.log('_________________________________________________________________________________')
                            }
                        }
                    }
                    if (verificação50 == false){
                        console.log('_________________________________________________________________________________')
                        console.log(`Parece que não temos um hotel com este ID, Você pode verificar nossos hotéis disponíveis e seus IDs com a funcionalidade "2" do menu anteior.`)
                        console.log('_________________________________________________________________________________')
                    }
                    break;
                    //-------------------------------
                    case 4: // Remover reserva
                    if (Reservas50.length > 0){
                        console.log(`Reservas disponíveis:`)
                        for (reserva of Reservas50){
                            console.log(`ID da Reserva: ${reserva.IDreserva}; ID do Hotel: ${reserva.IDhotel};  Nome do cliente: ${reserva.nomeCliente}`)
                        }
                        let IDremoção = prompt('Insira o ID da RESERVA que deseja cancelar: ')
                        for (reserva of Reservas50){
                            if (IDremoção == reserva.IDreserva){
                                verificação50 = true 
                                Hotéis50[reserva.IDhotel].Quartos_disponiveis += 1
                                Reservas50.splice(Reservas50.indexOf(reserva),1)
                                console.log(`Reserva cancelada com sucesso!\nReservas restantes:`)
                            console.log(Reservas50)
                        }
                    }
                    if (verificação50 == false){
                        console.log('_________________________________________________________________________________')
                        console.log(`Parece que não temos uma reserva com o ID inserido, tente novamente.`)
                        console.log('_________________________________________________________________________________')
                    }  
                } else {
                    console.log('_________________________________________________________________________________')
                    console.log(`Atualmente não temos nenhuma reserva agendada!`)    
                    console.log('_________________________________________________________________________________')
                }
                break;
                //-------------------------------
                case 5:
                if (Reservas50.length == 0) {
                    console.log('_________________________________________________________________________________')
                        console.log(`Atualmente não temos nenhuma reserva agendada!`)    
                        console.log('_________________________________________________________________________________')
                    } else {
                        console.log(`Reservas disponíveis:\n--------------------------------------------`)
                        for (reserva of Reservas50){
                            console.log(`ID da Reserva: ${reserva.IDreserva}; ID do Hotel: ${reserva.IDhotel};  Nome do cliente: ${reserva.nomeCliente}`)
                            console.log(`Hotel Relacionado: Nome: ${Hotéis50[reserva.IDhotel].Nome}; Cidade: ${Hotéis50[reserva.IDhotel].Cidade}; ID: ${Hotéis50[reserva.IDhotel].ID}; Quartos disponívei: ${Hotéis50[reserva.IDhotel].Quartos_disponiveis}`)
                            console.log('--------------------------------------------')
                        }
                    }
                break;
                //-------------------------------
                case 6: //Exibir Registro de Ocupação
                    console.log('Lista de hotéis\n--------------------------------------------')
                    for (hotel of Hotéis50){
                        console.log(`Nome: ${hotel.Nome} ; ID ${hotel.ID}\n--------------------------------------------`)
                    }
                    let registerID = prompt('Qual o ID do hotel que deseja verificar o registro?: ')
                    for (hotel of Hotéis50){
                        if (registerID == hotel.ID){
                        console.log(`Registro do ${hotel.Nome}`)
                        console.log("\n--------------------------------------------\n" +hotel.Registro)
                        verificação50 = true
                        }
                    }
                    if (verificação50 == false){
                        console.log('_________________________________________________________________________________')
                        console.log(`Desculpe, parece que não temos um hotel com o ID inserido (${registerID})`)
                        console.log('_________________________________________________________________________________')
                    }
                    break;
                    //-------------------------------
                    case 7: //Adicionar avaliação
                    console.log('Lista de hotéis\n--------------------------------------------')
                    for (hotel of Hotéis50){
                        console.log(`Nome: ${hotel.Nome} ; ID ${hotel.ID}\n--------------------------------------------`)
                    }
                    avaliaID = prompt('Qual o ID do hotel que deseja avaliar?: ')
                    for (hotel of Hotéis50){
                        if (avaliaID == hotel.ID){
                            nome = prompt('Qual o seu nome?: ')
                            do {
                                nota = parseFloat(prompt(`Insira uma nota de 0 a 5 para o hotel ${hotel.Nome}: `))
                                if (!(nota >= 0 && nota <= 5)) {
                                    console.log(`"${nota}" é uma nota inválida. Insira outro valor: `)
                                }
                            } while (!(nota >= 0 && nota <= 5))
                            hotel.Avaliacoes.push([nota, nome])
                            console.log(`Nota ${nota} adicionada com sucesso!`)
                            verificação50 = true
                        }
                    }
                    if (verificação50 == false){
                        console.log('_________________________________________________________________________________')
                        console.log(`Desculpe, parece que não temos um hotel com o ID inserido (${avaliaID})`)
                        console.log('_________________________________________________________________________________')
                    }
                break;
            }
        } while (funcionalidade >= 1 && funcionalidade < 8)
    break;
}