/* eslint-disable react/prop-types */
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick"; // Importa o Slider do react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const CarouselRow = styled(Slider)`
  width: 98vw;  // Ajuste a largura conforme necessário
  height: 20rem;  // Ajuste a altura conforme necessário
  margin: 2% auto;
  position: relative;

  .slick-slide {
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
    transition: 0.2s ease;
  }
  .slick-slide:hover {
    z-index: 2;
    cursor: pointer;
    scale: 1.02;
  }

  .slick-slide img {
    position:absolute;
    top:0;
    /* width: 100%; */
    height: 100%;
    transform-origin:center;
    margin:0 auto;
    left:0;
    right:0;
    
    object-fit: cover; // Ajusta a imagem para preencher o slide sem distorcer
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    font-size: 24px;
    text-shadow: 0 0 5px black;
    &::before {
      all: unset;
    }
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }
`;

const SectionTitle = styled.h1`
  padding-left: 3rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Slide = ({ item, onClick }) => (
  <div>
    <img onClick={() => onClick(item)} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={`Slide ${item.id}`} />
  </div>
);

const Featured = ({ ApiKey }) => {
  const [pop, setPop] = useState([]);
  const [series, setSeries] = useState([]);
  const [horror, setHorror] = useState([]);
  const navigate = useNavigate();
  const listStart = Math.floor(Math.random()* 12 + 1)
  useEffect(() => {
    setFeatured();
  }, []);

  const setFeatured = async () => {
    try {
      const popResponse = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=28",
        ApiKey
      );
      setPop(popResponse.data.results);
    } catch (error) {
      console.log(error);
    }
    try {
      const horrorResponse = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=27",
        ApiKey
      );
      setHorror(horrorResponse.data.results);
    } catch (error) {
      console.log(error);
    }
    try {
      const seriesResponse = await axios.get(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc",
        ApiKey
      );
      setSeries(seriesResponse.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const settings = {
    dots: false, // Desativa os dots
    infinite: true,
    speed: 400,
    slidesToShow: 8,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    prevArrow: <div className="slick-prev">◄</div>, // Personaliza a seta esquerda
    nextArrow: <div className="slick-next">►</div>, // Personaliza a seta direita
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = (item) => {
    localStorage.setItem('response', JSON.stringify(item));
    navigate('/Page');
  };

  return (
    <Container>
      {pop.length > 0 && (
        <>
          <SectionTitle onClick={() => navigate('/')}>Filmes Populares</SectionTitle>
          <CarouselRow {...settings}>
            {pop.slice(listStart, (listStart + 8)).map((item) => (
              <Slide key={item.id} item={item} onClick={handleClick} />
            ))}
          </CarouselRow>
        </>
      )}
      {series.length > 0 && (
        <>
          <SectionTitle>Séries Populares</SectionTitle>
          <CarouselRow {...settings}>
            {series.slice(listStart, (listStart + 8)).map((item) => (
              <Slide key={item.id} item={item} onClick={handleClick} />
            ))}
          </CarouselRow>
        </>
      )}
      {horror.length > 0 && (
        <>
          <SectionTitle>Filmes de Terror</SectionTitle>
          <CarouselRow {...settings}>
            {horror.slice(listStart, (listStart + 8)).map((item) => (
              <Slide key={item.id} item={item} onClick={handleClick} />
            ))}
          </CarouselRow>
        </>
      )}
    </Container>
  );
};

export default Featured;
