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
import { AppContainer, MainContent, Footer, ReturnButton } from "./assets/App-styling";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
    setCurrentComponent(["",'Carousel']);
  };

  
// Efeito colateral para manter o index do Carousel atualizado conforme o último componente acessado
  useEffect(() => {
    setCarouselIndex(currentComponent[0])
  }, [currentComponent])


  // Função para renderizar o componente atual com base no estado.
  const renderComponent = () => {
    switch (currentComponent[1]) {
      case "QRCodeGenerator":
        return <QRCodeGenerator path="/qr-code-generator"/>
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
