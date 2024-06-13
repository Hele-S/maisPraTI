class movie {
    constructor(title, synopsis, genre, release){
        this.title = title;
        this.synopsis = synopsis
        this.genre = genre
        this.release = release
    }


    validateData(){
        for (let i in this){
            if(this[i] === undefined || this[i === ""]){
                return false
            }
        }
        return true
    }
}

function registerTask(){
    let titulo = document.getElementById('titulo').value
    let sinopse = document.getElementById('sinopse').value
    let metodo = document.getElementById('metodo').value
    let data =  document.getElementById('data').value

    const movie = new movie(titulo, sinopse, metodo, data)
    if(movie.validateData()){
        Database.addMovie(movie)
    } 
}


class Database {
    addMovie(movie){
        localStorage.setItem(id, JSON.stringify(movie))
    }
}