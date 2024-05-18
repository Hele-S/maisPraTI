// const pessoa = {
//     nome: "Lucas" ,
//     idade: 18 ,
//     profissão: "Músico" ,
//     Email: "lucas@teste.com",
//     empregada: true
// }

// pessoa.fala = function(){
//     return `Meu nome é ${this.nome}, tenho ${this.idade} de idade e sou ${this.profissão}`
// }


// // console.log(pessoa['nome'])
// // delete pessoa.nome
// console.log(pessoa.fala())
// const cama = {
//     Necessidades: Array("travesseiro", "colchão", "cobertor"),
//     bau: Array("cobertores", "coisas inúteis", "aranhas"),
//     utilidade: "Ser um lugar para dormir em cima",

// }

// console.log(cama)
// for (let chave in pessoa){
//     console.log(chave + ": " + pessoa[chave])
// }

// let numeros = [10, 20, 100]
// for (let teste of numeros){
// console.log(teste)}

/*"Você tem uma lista de objetos que representam diferentes tipos de veívulos 
e suas características. Seu objetivo é primeiro usar o FOR IN para listar 
todas as propriedades e valores de cada veículo. Depois, utilizar o FOR OF 
para listar apenas os modelos dos veículos."*/

let carros = {
    Modelo: Array("Ford","Chevrolet","Acabou","Minhas","Ideias"),
    Cor: Array("Preto", "Vermelho","Azul","Cinza","Branco"),
    Preço: Array("25k","70k","80k","40k","35k")
}
 let aux = 0
while (aux < 5) {
    console.log(`Carro ${aux + 1}`)
    for (let linha in carros){
        console.log(`${linha}: ${carros[linha][aux]}`)
    }
    console.log("----------------------------------------")
    aux++
}
aux = 0
let modelos = carros.Modelo
for (let modelo of modelos){
    console.log(`Carro ${aux + 1}`)
    console.log(`${modelo}`)
    console.log("----------------------------------------")
    aux++
}

// let compras = Array()
// compras.frutas = Array('banana', 'morango', 'laranja')

// compras.frutas.forEach(function(value, index){
//     console.log(index + ": " + value)
// })

/*Construa um array de números e calcule a soma total dos números e também 
imprima cada número multiplicado por dois.*/

// let nmrs = Array(4,7,3,5,6,1)
// let total = 0
// for (let soma of nmrs){
//     total += parseInt(soma)
// }
// console.log(total)
// nmrs.forEach(function(value, index){
//     console.log(value * 2)
// })

//Design pattern simples

// function factory(ID, nome, data, cor, tamanho) {
//     return {ID,nome,data,cor,tamanho}}
// let item1 = factory(1, 'teste', 'hoje', 'preto', 'pequeno')
// let item2 = factory(2, 'exemplo', 'ontem', 'Branco', 'Grande')
// console.log(item1)