// Importando a lib para desenvolvimento do carousel e o hook para navegar entre os diferentes paths
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 
import useVerifyJWT from "../assets/hooks/useVerifyJWT"; // Importando o Hook para verificar o JWT



// Estiliza o contêiner do carrossel.
const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 70%;
  margin: auto;
  background-color: #2c3e50;
  border-radius: 20px;
  padding: 20px;
`;

// Estiliza o carrossel personalizado.
const CustomCarousel = styled(Carousel)`
  width: 100%;
  .carousel-status {
    display: none;
  }
`;

// Estiliza os itens individuais do carrossel.
const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  width: 100%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    color: white;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 16px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
  
/* eslint-disable react/prop-types */
//Componente Caroousel trazendo a função "handleAccess" do App.jsx com nome de "componentSelected"
const CarouselComponent = ({ newIndex }) => {
  const verifyJWT = useVerifyJWT(); // Recebe a função updateToken do hook
  const navigate = useNavigate(); //Atribuindo o hook para navegação

  const redirect = async (path) => {
    const tokenStatus = await verifyJWT(); // Verifica o token

    if (tokenStatus !== true) {
       location.reload() // Se o token for inválido, não procede com a tradução
      } else {
        navigate(path)
      }
  }
  //Conteúdo que será renderizado no App
  return (
    <CarouselContainer>
      <CustomCarousel
        showArrows={true}
        showThumbs={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        selectedItem={newIndex}
      >
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