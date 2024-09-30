import { useState } from "react"
import axios from "axios"
import styled from "styled-components"

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color: #b3b3b3;
    margin: 0 auto;
    padding: 15px;
    width: fit-content;
    max-height:30em;
`
const Title = styled.h2`
    color: #333;
    text-align: center;
`
const Input = styled.input`
    border-radius:20px;
    border: 1px solid gray;
    margin-bottom: 10px;
`
const Button = styled.button`
    background-color: gray;
    color: white;
    font-weight: bold;
    margin-bottom: 5px;
`
const MoviesContainer = styled.div`
    display:grid;
    /* flex-wrap: wrap; */
    overflow-y:scroll;
    max-width: 30em;
    grid-template-columns: repeat(2, 1fr);
    align-items:center;
    
    
`
const MovieCard = styled.div`
    display:flex;
    flex-direction:column;
    margin: 0 auto;
    width:fit-content;
    justify-content:center;
    align-items:center;
    font-size: 0.7rem;
`

const MovieSearch = () => {

    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')
    const searchMovies = async () => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=2ffad4a8`)
            setMovies(response.data.Search)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <Container>
            <Title>Movie Search Engine</Title>
            <Input
                type='text'
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <Button onClick={searchMovies}>Search</Button>
            <MoviesContainer>
                {movies && movies.map((movie) => (
                    <MovieCard key={movie.imdbID}>
                        <img height='100em' width="67em" src={movie.Poster} alt={`${movie.Title} Poster`} />
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </MovieCard>
                ))}
            </MoviesContainer>

        </Container>
    )
}
export default MovieSearch