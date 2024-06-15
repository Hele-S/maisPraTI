class Movie {
    constructor(title, synopsis, genre, release){
        this.title = title;
        this.synopsis = synopsis
        this.genre = genre
        this.release = release
    }


    validateData(){
        for (let i in this){
            if(this[i] === undefined || this[i] === ""){
                return false
            }
        }
        return true
    }
}

class Database {
    constructor(){
        const id = localStorage.getItem('id')
        if (id===null){
            localStorage.setItem('id',0)
        }
    }

    moviesList(){
        const movies = Array()

        const id = localStorage.getItem('id')

        for(let i = 1; i <= id; i++){
            const movie = JSON.parse(localStorage.getItem(i))
            if (movie === null){
                continue
            }

            movie.id = i
            movies.push(movie)
        }
        return movies
    }
    
    addMovie(movie){
        
        const id = getNextId()
        localStorage.setItem(id,JSON.stringify(movie))
        localStorage.setItem('id', id)
    }
}

const database = new Database()

function getNextId() {
    const nextId = localStorage.getItem('id')
    return parseInt(nextId) +1;
}

function registerMovie(){
    let titulo = document.getElementById('titulo').value
    let sinopse = document.getElementById('sinopse').value
    let metodo = document.getElementById('metodo').value
    let data =  document.getElementById('data').value

    const movie = new Movie(titulo, sinopse, metodo, data)


    if(movie.validateData()){
        database.addMovie(movie)
    } 
}


function deletar(){
    localStorage.removeItem(localStorage.getItem('id'))
    const id = localStorage.getItem('id')
}

function loadMovies(){
    const movies = database.moviesList();
    const library = document.getElementById('library');
    movies.forEach((m) => {
        const row = library.insertRow();
        row.insertCell(0).innerHTML = `${m.title} / ${m.synopsis} / ${m.genre} / ${m.release}`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
        loadMovies();
        
    
});