let index = 0

function carousel(){
    let imagens = document.getElementsByClassName("images")
    if (index == imagens.length) {
        index = 0
    }
    if (index == -1){
        index = imagens.length -1
    }
    for (clear of imagens){
        document.getElementById(clear.id).style.opacity = '0.2'
    }
    for (i of imagens) {
        if (i.id == imagens[index].id) {
            document.getElementById(imagens[index].id).style.opacity = '1';
        } 
    }
    
}
function next(){
    index++;
    carousel()
}
function previous(){
    index--;
    carousel()
}

document.addEventListener('DOMContentLoaded', carousel())