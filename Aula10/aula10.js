// const professor = {
//     nome: 'fogaça',
//     materia: 'culinária',
//     notas: {
//         aluno1: 5.5,
//         aluno2: 7,
//         aluno3: 5.9
//     }
// }
// let media = 0
// let notasQTD = Array()
// for (nota in professor.notas){
//     media += professor.notas[nota]
//     notasQTD.push(professor.notas[nota])
// }
// media = media / notasQTD.length
// if (media < 6){
//     console.log('Passo não')
// }
// else if (media >= 6) {
//     console.log('Passo parabens')
// }
// console.log(media.toFixed(2))




// const biblioteca = [
//     { titulo: "x", autor: "y", ano: 1925},
//     { titulo: "a", autor: "b", ano: 1917},
//     { titulo: "1", autor: "2", ano: 2009},
//     { titulo: "{", autor: "}", ano: 1940},
//     { titulo: "[[", autor: "]]", ano: 2021},
// ]
// for (livro of biblioteca) {
//     if (livro.ano < 2000){
//         console.log(`Título: ${livro.titulo}, Ano: ${livro.ano}`)
//     }    
// }


// const filmes = [
//     {titulo: "Tropa de Elite", genero: "Ação"},
//     {titulo: "Tropa de Elite", genero: "Ação"},
//     {titulo: "Capitão Fantástico", genero: "Drama"},
//     {titulo: "O Poderoso Chefão", genero: "Crime"},
//     {titulo: "Clube da Luta", genero: "Drama"},
//     {titulo: "Oppenheimer", genero: "Biografia"},
//     {titulo: "Oppenheimer", genero: "Biografia"},
//     {titulo: "Oppenheimer", genero: "Biografia"},
//     {titulo: "Oppenheimer", genero: "Biografia"},
//     {titulo: "Oppenheimer", genero: "Biografia"},
//     {titulo: "Hihg School Musical", genero: "Musical"},
//     {titulo: "Hihg School Musical", genero: "Musical"},
//     {titulo: "Hihg School Musical", genero: "Musical"},
//     {titulo: "Barbie", genero: "Comédia"}
// ]
// let Contagem = {}
// filmes.forEach(function(Filme){
//     if (Contagem[Filme.genero]){
//         Contagem[Filme.genero]++
//     }
//     else {Contagem[Filme.genero] = 1 }
// })
// console.log(Contagem)

/*                   PESQUISA BINÁRIA
DESENVOLVA UM ALGORITMO QUE SEJA CAPAZ DE RECEBER UMA LISTA E UM VALOR 
CORRETO E EXECUTE UMA PESQUISA BINÁRIA PARA ENCONTRAR O VALOR CERTO.*/

// const prompt = require('prompt-sync')()

let list = [1,2,3,4,5,6,7,8,9,10,11]
let guess
let nmr
let attempts = []
let sorted = 11
// do {nmr = prompt('Manda os número em ordem ou letra pra encerrar: ')
//     if (!(nmr <0 || nmr >=0)) {
//         console.log('Lista encerrada.')
//     } else {
//         list.push(nmr)
//     }
// } while (nmr <0 || nmr >=0)



let answer = function(array){
    if (array[array.length] == sorted){
        return "acerto miseravi"
    } else {return "errou patrão"}
}


console.log(answer(list))
console.log(answer(list[list.length]))
// console.log(lista.indexOf(sorted))