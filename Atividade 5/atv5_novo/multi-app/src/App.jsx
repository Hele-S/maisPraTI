// Importa hooks e componentes do React e bibliotecas externas.
import { useState, useEffect } from "react";
import {
  Route,
  Routes,
  // Navigate,
  useNavigate,
  // useLocation,
  // Link,
} from "react-router-dom";

import styled from "styled-components";
import {
  FaArrowLeft,
} from "react-icons/fa";
import QRCodeGenerator from "./components/QRCodeGenarator";
import IPAddressFinder from "./components/IPAddressFinder";
import MovieSearchEngine from "./components/MovieSearchEngine";
import TodoApp from "./components/TodoApp";
import QuizApp from "./components/QuizApp";
import LanguageTranslator from "./components/LanguageTranslator";
import Login from "./components/Login";
import CarouselComponent from "./components/CarouselComponent";
import NavBarComponent from "./components/NavBarComponent";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Estiliza o contêiner principal do aplicativo.
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
`;

// Estiliza o conteúdo principal do aplicativo.
const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

// Estiliza o rodapé do aplicativo.
const Footer = styled.div`
  width: 100%;
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 10px 0;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    padding: 5px 0;
    font-size: 12px;
  }
`;

// Estiliza o botão de retorno.
const ReturnButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

// Define o componente principal do aplicativo.
const App = () => {
  // Cria estados para autenticação, visibilidade da barra de navegação, componente atual e novo index do carousel
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [currentComponent, setCurrentComponent] = useState([0, "QRCodeGenerator"]);

  //NOVO função para atualizar o componente lá do CarouselComponent
  const updateComponent = (component) => {
    setCurrentComponent(component)
  }

  const navigate = useNavigate(); // Hook para navegação.

  // Efeito colateral que redireciona para a página de login se não estiver autenticado.
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  // Função para simular login e redirecionar para o gerador de QR code.
  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentComponent([0,"QRCodeGenerator"])
  };


  // Função para simular logout e redirecionar para a página de login.
  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };


  // Função para definir o componente atual a ser exibido e atualizar o índice do carrossel.
  const handleAccess = ( component ) => {
    // setCarouselIndex(index);
    setCurrentComponent(component);
    renderComponent
  };

  // Função para retornar ao carrossel principal.
  const handleReturn = () => {
    setCurrentComponent(["x",'Carousel']);
  };

  

  useEffect(() => {
    setCarouselIndex(currentComponent[0])
  }, [currentComponent])


  // Função para renderizar o componente atual com base no estado.
  const renderComponent = () => {
    switch (currentComponent[1]) {
      case "QRCodeGenerator":
        return <QRCodeGenerator />;
      case "IPAddressFinder":
        return <IPAddressFinder />;
      case "MovieSearchEngine":
        return <MovieSearchEngine />;
      case "TodoApp":
        return <TodoApp />;
      case "QuizApp":
        return <QuizApp />;
      case "LanguageTranslator":
        return <LanguageTranslator />;
      case "Carousel":
        return <CarouselComponent componentSelected={updateComponent} newIndex={carouselIndex} />;
      default:
        return null;
    }
  };

  // Renderiza o componente principal.
  return (
    <AppContainer>

      {!isAuthenticated ? (
        <MainContent>
          <Login onLogin={handleLogin} />
        </MainContent>
      ) : (
        <>
          <NavBarComponent Redirect={handleAccess} logOut={handleLogout}/>
          <MainContent>
            <Routes>
              <Route path="/" element={
                <>
                  {renderComponent()}
                  <ReturnButton onClick={handleReturn}>
                    <FaArrowLeft /> Return
                  </ReturnButton>
                </>
              } />
            </Routes>
            <Footer>© 2024 Your Company | All rights reserved</Footer>
          </MainContent>
        </>
      )}
    </AppContainer>
  );
};

// Exporta o componente App para ser utilizado em outras partes da aplicação.
export default App;
