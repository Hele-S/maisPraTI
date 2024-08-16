// Importando a lib para desenvolvimento do carousel e o hook para navegar entre os diferentes paths
// import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom"; 
import { CarouselContainer, CustomCarousel, CarouselItem } from "../assets/styles/Carousel-styling";
import useVerifyJWT from "../assets/hooks/useVerifyJWT"; // Importando o Hook para verificar o JWT

/* eslint-disable react/prop-types */
// Componente Caroousel trazendo a função "handleAccess" do App.jsx com nome de "componentSelected"
const CarouselComponent = ({ newIndex }) => {
  const verifyJWT = useVerifyJWT(); // Recebe a função updateToken do hook
  const navigate = useNavigate(); // Atribuindo o hook para navegação

  const redirect = async (path) => {
    const tokenStatus = await verifyJWT(); // Verifica o token

    if (tokenStatus !== true) {
       location.reload() // Se o token for inválido, não procede com a tradução
      } else {
        navigate(path) // Redireciona para a página desejada
      }
  }
  // Conteúdo que será renderizado no App
  return (
    // Container do Carousel
    <CarouselContainer>
      {/*Props do carousel*/}
      <CustomCarousel
        showArrows={true}
        showThumbs={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        selectedItem={newIndex}
      >
        {/*Listagemd de itens do carousel*/}
        <CarouselItem>
          <h2>QR Code Generator</h2>
          <button onClick={() => redirect('/qr-code-generator')}>
            Acessar
          </button>
        </CarouselItem>
        <CarouselItem>
          <h2>IP Address Finder</h2>
          <button onClick={() => redirect('/ip-address-finder')}>
            Acessar
          </button>
        </CarouselItem>
        <CarouselItem>
          <h2>Movie Search Engine</h2>
          <button onClick={() => redirect('/movie-search-engine')}>
            Acessar
          </button>
        </CarouselItem>
        <CarouselItem>
          <h2>Todo App</h2>
          <button onClick={() => redirect('/to-do-app')}>
            Acessar
          </button>
        </CarouselItem>
        <CarouselItem>
        <h2>Quiz App</h2>
        <button onClick={() => redirect('/quiz-app')}>
            Acessar
          </button>
        </CarouselItem>
        <CarouselItem>
          <h2>Language Translator</h2>
          <button onClick={() => redirect('/language-translator')}>
            Acessar
          </button>
        </CarouselItem>
      </CustomCarousel>
    </CarouselContainer>
  )
}

//Exporta o componente "CarouselComponent" para ser usado em App.jsx
export default CarouselComponent