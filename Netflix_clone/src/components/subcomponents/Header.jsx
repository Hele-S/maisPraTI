import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const HeaderDiv = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: black;
  gap:1rem;
`;

const Logo = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: #e50914;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;


const SearchIcon = styled.img`
  width: 35px;
  height: 35px;
  color: #333;
  opacity:${(props) => (props.show ? '1' : '0')};
  z-index:1;
`;
const InputContainer = styled.div`
  width: 100%;
  max-width: 50rem;
 position:relative;
 overflow:hidden;
 border-radius: 20px;
 display:flex;
 justify-content:left;
`
const InputSearch = styled.input`
  position: relative;
  height: 40px;
  padding: 0 15px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;
  transform: ${(props) => (props.show ? '' : 'translateX(-100%)')};
  transform-origin: right;  /* Ajustar o ponto de origem da transformação para a extremidade esquerda */

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #e50914;
    background-color: #444;
  }
`;

// eslint-disable-next-line react/prop-types
const Header = ({ ApiKey }) => {
    const [searchState, setSearchState] = useState(false);
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    // Função para buscar filmes
    const searchMovies = async (searchQuery) => {
        if (searchQuery.trim() === '') {
            setMovies([]); // Limpa a lista se a pesquisa estiver vazia
            return;
        }

        try {
            const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
                ...ApiKey,
                params: {
                    query: searchQuery, // Inclui o termo de busca
                    language: 'pt-BR'  // Inclua o idioma se necessário
                }
            });
            setMovies(response.data.results);
        } catch (error) {
            console.error('Erro ao buscar filmes:', error);
        }
    };

    // Função chamada ao mudar o valor do input
    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setQuery(searchTerm);
        searchMovies(searchTerm);
    };

    const searchStateSwitch = () => {
        setSearchState(!searchState);
    };

    return (
        <>
            <HeaderDiv>
                <Logo>NETFLIX</Logo>
                <InputContainer>
                    <InputSearch
                        show={searchState}
                        placeholder="Buscar filmes e séries"
                        onBlur={searchStateSwitch}
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                    />
                </InputContainer>
                <SearchIcon 
                    show={!searchState}
                    onClick={searchStateSwitch} 
                    src="\src\assets\imgs\searhIcon.svg"
                />
            </HeaderDiv>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </>
    );
};

export default Header;
