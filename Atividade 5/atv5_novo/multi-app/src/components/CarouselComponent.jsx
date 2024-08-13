import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

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
const CarouselComponent = ({ componentSelected, newIndex }) => {

  return (
    <CarouselContainer>
      <CustomCarousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        selectedItem={newIndex}
      >
        <CarouselItem>
          <h2>QR Code Generator</h2>
          <button onClick={() => {
            componentSelected([0, "QRCodeGenerator"])
          }}>
            Acessar
          </button>
        </CarouselItem>
        <CarouselItem>
          <h2>IP Address Finder</h2>
          <button onClick={() => {
            componentSelected([1, "IPAddressFinder"])
          }}>
            Acessar
          </button>
        </CarouselItem>
        <CarouselItem>
          <h2>Movie Search Engine</h2>
          <button
            onClick={() => {
              componentSelected([2, "MovieSearchEngine"])
            }}
          >
            Acessar
          </button>
        </CarouselItem>
        <CarouselItem>
          <h2>Todo App</h2>
          <button onClick={() => {
            componentSelected([3, "TodoApp"])
          }}>
            Acessar
          </button>
        </CarouselItem>
        <CarouselItem>
          <h2>Quiz App</h2>
          <button onClick={() => {
            componentSelected([4, "QuizApp"])
          }}>
            Acessar
          </button>
        </CarouselItem>
        <CarouselItem>
          <h2>Language Translator</h2>
          <button
            onClick={() => {
              componentSelected([5, "LanguageTranslator"])
            }}
          >
            Acessar
          </button>
        </CarouselItem>
      </CustomCarousel>
    </CarouselContainer>
  )
}
export default CarouselComponent