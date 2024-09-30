import classe from './Header.module.css'
function HeaderAttempt(){
    return(
        <header>
            <h1 className={classe.titulo}>Navbar</h1>
            <ul>
                <li><a href="">Login</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">More</a></li>
            </ul>
        </header>
    )
}

export default HeaderAttempt