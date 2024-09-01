import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Slider from "react-slick"; // Importa o Slider do react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const CarouselRow = styled(Slider)`
  width: 98vw;  // Ajuste a largura conforme necessário
  height: 19rem;  // Ajuste a altura conforme necessário
  margin: 0 auto;
  position:relative;

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .slick-slide  .logo {
    position:absolute;
    width:1.5rem;
    height:2rem;
    margin:0.5rem;
  }
  .slick-slide img {
    width: 15rem;
    height: 19rem;
    max-height: 100%;
    object-fit: cover; // Ajusta a imagem para preencher o slide sem distorcer
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color:  rgba(0, 0, 0, 0.5);
    font-size: 24px;
    text-decoration:ouline;
    text-shadow: 0 0 5px black;
    &::before{
        all:unset;
    }
  }

  .slick-prev {

    left: 10px;
  }

  .slick-next {
    right: 10px;
  }
`;

const Featured = () => {
    const [pop, setPop] = useState();
    const [drama, setDrama] = useState();
    const [horror, setHorror] = useState();

    const options = {
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzBjOGE4MGVmNTE3ODVlZTNjMjExMWIyZWRjNTU4OSIsIm5iZiI6MTcyNTEyODcxNS41NzUzNDUsInN1YiI6IjY2ZDM1ZDkxNGE3NzlkMmE1Y2IxNjkyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ny_zoZFkI4K7g-QjaUohRno-UiOlPvLcgaNRSiq7H0I"
        }
    };

    useEffect(() => {
        if (pop !== undefined) {
            console.log((pop[0].poster_path), "----------------------");
        }
    }, [pop]);
    useEffect(() => {
        setFeatured()
    }, []);

    const setFeatured = async () => {
        try {
            const popResponse = await axios.get(
                "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=28",
                options
            );
            setPop(popResponse.data.results);
        } catch (error) {
            console.log(error);
        }//
        try {
            const horrorResponse = await axios.get(
                "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=27",
                options
            );
            setHorror(horrorResponse.data.results)
        } catch (error) {
            console.log(error)
        }
        try {
            const dramaResponse = await axios.get(
            "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",    
            options
            );
            setDrama(dramaResponse.data.results)
        } catch (error) {
            console.log(error)
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
                breakpoint: 1600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Container>
            {pop && <>
                    <h1>Populares</h1>
                <CarouselRow {...settings}>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img onClick={setFeatured} src={`https://image.tmdb.org/t/p/w500${pop[0].poster_path}`} alt="Slide 1" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${pop[1].poster_path}`} alt="Slide 2" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${pop[2].poster_path}`} alt="Slide 3" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${pop[3].poster_path}`} alt="Slide 4" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${pop[4].poster_path}`} alt="Slide 5" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${pop[5].poster_path}`} alt="Slide 6" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${pop[6].poster_path}`} alt="Slide 7" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${pop[7].poster_path}`} alt="Slide 8" />
                    </div>
                </CarouselRow>
            </>}
            {drama && <>
                    <h1>Populares</h1>
                <CarouselRow {...settings}>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img onClick={setFeatured} src={`https://image.tmdb.org/t/p/w500${drama[0].poster_path}`} alt="Slide 1" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${drama[1].poster_path}`} alt="Slide 2" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${drama[2].poster_path}`} alt="Slide 3" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${drama[3].poster_path}`} alt="Slide 4" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${drama[4].poster_path}`} alt="Slide 5" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${drama[5].poster_path}`} alt="Slide 6" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${drama[6].poster_path}`} alt="Slide 7" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${drama[7].poster_path}`} alt="Slide 8" />
                    </div>
                </CarouselRow>
            </>}
            {horror && <>
                    <h1>Populares</h1>
                <CarouselRow {...settings}>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img onClick={setFeatured} src={`https://image.tmdb.org/t/p/w500${horror[0].poster_path}`} alt="Slide 1" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${horror[1].poster_path}`} alt="Slide 2" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${horror[2].poster_path}`} alt="Slide 3" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${horror[3].poster_path}`} alt="Slide 4" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${horror[4].poster_path}`} alt="Slide 5" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${horror[5].poster_path}`} alt="Slide 6" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${horror[6].poster_path}`} alt="Slide 7" />
                    </div>
                    <div>
                        <img className="logo" src="\src\assets\imgs\Netflix_2015_N_logo.svg" alt="" />
                        <img src={`https://image.tmdb.org/t/p/w500${horror[7].poster_path}`} alt="Slide 8" />
                    </div>
                </CarouselRow>
            </>}
        </Container>
    );
};

export default Featured;
