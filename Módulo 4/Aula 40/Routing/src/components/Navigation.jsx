import { Link } from 'react-router-dom'

function Navigation() {
    return(
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/C2'>Contact</Link></li>
                <li><Link to='/C3'>About</Link></li>
            </ul>
        </nav>
    )
} 
export default Navigation