//Importando a lib styled para estilização de componentes, e outros componentes e hooks necessários para atribuição de constantes, links e ícones
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import  useVerifyJWT  from "../assets/hooks/useVerifyJWT" // Importando o Hook para verificar o JWT
import {
    FaQrcode,
    FaSearch,
    FaTasks,
    FaRegQuestionCircle,
    FaGlobeAmericas,
    FaNetworkWired,
    FaBars,
  } from "react-icons/fa";

// Estiliza a barra de navegação.
const NavBar = styled.div`
  width: 240px;
  background-color: #2c3e50;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 3px 0 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

// Estiliza o botão de alternância da barra de navegação.
const NavBarToggle = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Estiliza os links na barra de navegação.
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #34495e;
    color: #ecf0f1;
  }
`;

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