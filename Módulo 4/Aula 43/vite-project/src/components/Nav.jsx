import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigate = styled.div`
background-color: #b3b3b3;
display: flex;
position: absolute;
top:0;
left:0;
height: 3em;
margin: 0;
width:100vw;
`
const List = styled.ul`
    display:flex;
    justify-content:space-around;
    list-style:none;
    width:100%
`

const Item = styled.li`
    
`

function Nav() {
    return(
        <Navigate>
            <List>
                <Item><Link to='/IPAddressFinder'>Encontrar IP</Link></Item>
                <Item><Link to='/QRCodeGenerator'>Gerar código QR</Link></Item>
                <Item><Link to='/MovieSearch'>Pesquisar Filmes</Link></Item>
                <Item><Link to='/LanguageTranslator'>Tradutor</Link></Item>
            </List>
        </Navigate>
    )
}
export default Nav