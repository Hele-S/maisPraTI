import classe from './Header.module.css'
const books = ['O Hobbit', 'Harry Potter', 'Nárnia']

function HelloWorld(){

    const chosenBook = Math.random() > 0.5 ? books[0] : books[1]

    return (
        <div>
            <h1 className= {classe.titulo}>Hello World, sou o Hele</h1>
            <p>{chosenBook}</p>
        </div>
    )
}

export default HelloWorld