/* eslint-disable react-hooks/exhaustive-deps */
// Importa hooks e componentes do React e bibliotecas externas.
import { useState, useEffect } from "react";
import {
  Route,
  Routes,
  // Navigate,
  useNavigate,
  useLocation,
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
import { AppContainer, MainContent, Footer, ReturnButton } from "./assets/styles/App-styling";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";


//Lista de rotas do app
const routeMap = {
  0: "/qr-code-generator",
  1: "/ip-address-finder",
  2: "/movie-search-engine",
  3: "/to-do-app",
  4: "/quiz-app",
  5: "/language-translator",
  6: "/"
}
// Define o componente principal do aplicativo.
const App = () => {
  // Cria estados para autenticação, componente atual e novo index do carousel
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const navigate = useNavigate(); // Hook para navegação.

  // Efeito colateral que redireciona para a página de login se não estiver autenticado.
  useEffect(() => {
    if (!isAuthenticated) {
      sessionStorage.removeItem('token')
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  // Função para simular login e redirecionar para o gerador de QR code.
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/qr-code-generator");
  };

  // Função para simular logout e redirecionar para a página de login.
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('token')
    navigate("/");
  };

  // Função para retornar ao carrossel principal.
  const handleReturn = () => {
    return (
      navigate(routeMap['6'])

    )
  };

  //Atribuição do hook useLocation para localizar o endereço atual
  const location = useLocation();

  // Efeito colateral para manter o index do Carousel atualizado conforme o último endereço acessado
  useEffect(() => {
    for (let i in routeMap) {
      if (routeMap[i] === location.pathname && location.pathname != routeMap['6']) {
        setCarouselIndex(i)
      }
    }
  }, [location])
  // Renderiza o componente principal.
  return (
    <AppContainer>
      {!isAuthenticated ? (
        <MainContent>
          <Login onLogin={handleLogin} />
        </MainContent>
      ) : (
        <>
          <NavBarComponent logOut={handleLogout} />
          <MainContent>
            <Routes>
              <Route path={routeMap['0']} element={
                <>
                  <QRCodeGenerator />
                  <ReturnButton onClick={handleReturn}>
                    <FaArrowLeft /> Return
                  </ReturnButton>
                </>
              } />
              <Route path={routeMap['1']} element={
                <>
                  <IPAddressFinder />
                  <ReturnButton onClick={handleReturn}>
                    <FaArrowLeft /> Return
                  </ReturnButton>
                </>
              } />
              <Route path={routeMap['2']} element={
                <>
                  <MovieSearchEngine />
                  <ReturnButton onClick={handleReturn}>
                    <FaArrowLeft /> Return
                  </ReturnButton>
                </>
              } />
              <Route path={routeMap['3']} element={
                <>
                  <TodoApp />
                  <ReturnButton onClick={handleReturn}>
                    <FaArrowLeft /> Return
                  </ReturnButton>
                </>
              } />
              <Route path={routeMap['4']} element={
                <>
                  <QuizApp />
                  <ReturnButton onClick={handleReturn}>
                    <FaArrowLeft /> Return
                  </ReturnButton>
                </>
              } />
              <Route path={routeMap['5']} element={
                <>
                  <LanguageTranslator />;
                  <ReturnButton onClick={handleReturn}>
                    <FaArrowLeft /> Return
                  </ReturnButton>
                </>
              } />
              <Route path={routeMap['6']} element={
                <>
                  <CarouselComponent newIndex={carouselIndex} />;
                  <ReturnButton onClick={handleReturn}>
                    <FaArrowLeft /> Return
                  </ReturnButton>
                </>
              }>

              </Route>
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
