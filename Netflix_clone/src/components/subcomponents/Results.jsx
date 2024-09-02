import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Grid = styled.div`
    margin-top: 3rem;
    position: absolute;
    display: grid;
    width: 100vw;
    color: #0000ff;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 3rem;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
    
    @media (max-width: 800px) {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
    
    @media (max-width: 500px) {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
`
const GridItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
    transition: 0.2s ease;
    flex-direction:column;
`
const Poster = styled.img`
    width:100%;
`

const Results = () => {
    const [foundResults, setFoundResults] = useState(() => {
        return JSON.parse(localStorage.getItem("Search"));
    });
    const updateSearch = () => {
        setFoundResults(JSON.parse(localStorage.getItem("Search")))
        console.log(foundResults)
    }
    let timeoutId
    const startProcess = (func, delay) => {
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        }
    }
    useEffect(() => {
        window.addEventListener('keyup', startProcess(updateSearch, 1000))
    }, [])



    return (
        <>
            {foundResults.results.length > 0 && (
                <Grid>
                    {foundResults.results.map((movie) => (
                        <GridItem key={movie.id}>
                            {movie.title}
                            <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        </GridItem>
                    ))}
                </Grid>
            )}
        </>
    );
};

export default Results;
