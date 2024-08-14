//Importando a lib styled para estilização de componentes, e outros componentes e hooks necessários para atribuição de constantes, links e ícones
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom"
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
  //Constante que retorna o estado da barra de navegação
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);
    
    // Alterna a visibilidade da barra de navegação.
    const toggleNavBar = () => {
        setIsNavBarOpen(!isNavBarOpen);
      };
      //Conteúdo que será renderizado no App
    return(
        <>
        <NavBarToggle onClick={toggleNavBar}>
        <FaBars size={24} color="#2C3E50" />
      </NavBarToggle>
      <NavBar open={isNavBarOpen}>
        <StyledLink to="/qr-code-generator" >
          <FaQrcode />
          QR Code Generator
        </StyledLink>
        <StyledLink to="/ip-address-finder" >
          <FaNetworkWired />
          IP Address Finder
        </StyledLink>
        <StyledLink to="/movie-search-engine" >
          <FaSearch />
          Movie Search
        </StyledLink>
        <StyledLink to="/to-do-app" >
          <FaTasks />
          Todo App
        </StyledLink>
        <StyledLink to="/quiz-app" >
          <FaRegQuestionCircle />
          Quiz App
        </StyledLink>
        <StyledLink to="/language-translator" >
          <FaGlobeAmericas />
          Translator
        </StyledLink>
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