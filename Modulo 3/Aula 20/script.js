let dia = true
function inserir (elemento){
if (document.calculadora.display.value.length<14 && elemento != 0){
    document.calculadora.display.value += elemento
} else if (document.calculadora.display.value.length>0 && elemento == 0 && document.calculadora.display.value.length<14){
    document.calculadora.display.value += elemento
}
}
function limpar(){
    document.calculadora.display.value = null
}
function deletar(){
    let valor = document.calculadora.display.value
    document.calculadora.display.value = valor.substring(0, valor.length-1)
}
function calcular (){
    let result =document.calculadora.display.value
    if(result){
        document.calculadora.display.value = eval(result)
    } 
}
function noturno(button){
if (dia==true){
    document.getElementById("calculadora").className = "noite";
    button.value = '🌜'
    dia = false
} else {
    document.getElementById("calculadora").className = "dia";
    button.value = '🌞'
    dia = true
}
}