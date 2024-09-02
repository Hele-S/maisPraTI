import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Grid = styled.div`
    margin-top: 3rem;
    position: relative;
    display: grid;
    width: 95vw;
    color: #0000ff;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: .8rem;
    margin-bottom:10rem;
    margin-left:auto;
    margin-right:auto;
    background-color:#333;
    border-radius:10px;
    padding: 1rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
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
    position:relative;
    justify-content: center;
    align-items: center;
    height: 20rem;
    transition: 0.2s ease;
    flex-direction:column;
    &:hover .child{
        opacity: 1;
    }
`
const Child = styled.div`
    display:flex;
    justify-content:center;
    position:absolute;
    text-align:center;
    align-items:flex-end;
    padding-bottom:5px;
    bottom:0;
    opacity:0;
    z-index:2;
    
    font-size:1.2rem;
    margin: 0 auto;
    width:100%;
    min-height:20%;
    color:#ffffff;
    transition:.3s ease;
    text-shadow: 0 -1px 1px #333333;
    background: linear-gradient(to top, #000000bb 5%, rgba(0, 0, 0, 0) 80%);
    font-weight:bold;
`
const Poster = styled.img`
    width:100%;
    height:100%;
`
const Results = () => {
    const navigate = useNavigate()
    const [foundResults, setFoundResults] = useState();
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
            {foundResults !== undefined && foundResults.results !== undefined ? (<>
                <h1>Resultados da Busca</h1>
                <Grid>
                    {foundResults.results.map((movie) => (
                        <GridItem key={movie.id} onClick={() => { localStorage.setItem('response', JSON.stringify(movie)), navigate(`/Page`) }}>
                            <Child className='child'>{movie.title}</Child>
                            <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        </GridItem>
                    ))}
                </Grid>
            </>) : (<div></div>)
            }
        </>
    );
};
export default Results;