//Exercícios de arrays e funções

//Somar todos os elementos de uma array

// let elementos = [1, 2,3,4]
// let soma = 0
// function somaElementos(vetor){    
//     for (i = 0; i < vetor.length; i++) {
//         soma += vetor[i]
//     }
//     return soma
// }
// console.log(somaElementos(elementos))

//Exercício 2: Encontrar o maior número em uma array

// let número = [1, 12, 10, 7, 9]
// function pegarMaior (arrayNúmero){
//     let maior = 0
//     for (i = 0; i < arrayNúmero.length; i++){
//         if (arrayNúmero[i]>maior){
//             maior = arrayNúmero[i]
//         } 
//     }
//     return maior
// }
// console.log(pegarMaior(número))

// Exercício 3 Reverter um array

let ordenado = [2,3,5,5,1,0]
function Reverter (alvo){
    let resultado = []
    for (i = alvo.length - 1; i >= 0 ; i--){
        resultado.push(alvo[i])
    }
    return resultado
  
} console.log(Reverter(ordenado))