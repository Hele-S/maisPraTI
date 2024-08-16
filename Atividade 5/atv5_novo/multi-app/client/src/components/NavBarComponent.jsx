//Importando a lib styled para estilização de componentes, e outros componentes e hooks necessários para atribuição de constantes, links e ícones
import { useState } from "react";
import { /*Link,*/ useNavigate } from "react-router-dom"
import  useVerifyJWT  from "../assets/hooks/useVerifyJWT" // Importando o Hook para verificar o JWT
import { NavBar, NavBarToggle, StyledLink} from "../assets/styles/NavBar-styling"
import {
    FaQrcode,
    FaSearch,
    FaTasks,
    FaRegQuestionCircle,
    FaGlobeAmericas,
    FaNetworkWired,
    FaBars,
  } from "react-icons/fa";



/* eslint-disable react/prop-types */
const NavBarComponent = ( {/*Redirect*/ logOut} ) => {
  // Constante que retorna o estado da barra de navegação
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);
    // Atribuição do Hook autenticação à verifyJWT
    const verifyJWT = useVerifyJWT()
    // Atribuição do Hook de navegação à navigate
    const navigate = useNavigate()

    const redirect = async (path) => {
      const tokenStatus = await verifyJWT(); // Verifica o token
      
      if (tokenStatus !== true) {
       location.reload() // Se o token for inválido, não procede com a tradução
      } else {
        navigate(path) // Redireciona para a página desejada
       }
    }
    
    // Alterna a visibilidade da barra de navegação.
    const toggleNavBar = () => {
        setIsNavBarOpen(!isNavBarOpen);
      };
      //Conteúdo que será renderizado no App
    return(
        <>
        {/*Botão para ocultar a barra de navegação*/}
        <NavBarToggle onClick={toggleNavBar}>
        <FaBars size={24} color="#2C3E50" />
      </NavBarToggle>
      {/*Conteúdo da barra de navegação*/}
      <NavBar open={isNavBarOpen}>
        {/*Links para as diferentes páginas*/}
        <StyledLink onClick={() => redirect('/qr-code-generator')}>
          <FaQrcode />
          QR Code Generator
        </StyledLink>
        <StyledLink onClick={() => redirect('/ip-address-finder')}>
          <FaNetworkWired />
          IP Address Finder
        </StyledLink>
        <StyledLink onClick={() => redirect('/movie-search-engine')}>
          <FaSearch />
          Movie Search
        </StyledLink>
        <StyledLink onClick={() => redirect('/to-do-app')}>
          <FaTasks />
          Todo App
        </StyledLink>
        <StyledLink onClick={() => redirect('/quiz-app')}>
          <FaRegQuestionCircle />
          Quiz App
        </StyledLink>
        <StyledLink onClick={() => redirect('/language-translator')}>
          <FaGlobeAmericas />
          Translator
        </StyledLink>
        {/*Botão para fazer logout*/}
        <button
              onClick={logOut}
              style={{
                marginTop: "20px",
                color: "white",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              Logout
            </button>
      </NavBar>
      </>
    )
}
//Exportnado o compnente "NavBarComponent" para ser usado em App.jsx
export default NavBarComponent