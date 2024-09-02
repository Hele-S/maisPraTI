import styled from 'styled-components'

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
    color: #fff;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Paragraph = styled.p`
    font-size: 1rem;
    color: #ddd;
    margin-bottom: 0.5rem;
    line-height: 1.5;
    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70vw;
    max-width: 1200px;
    margin: 2rem auto;
    background: #222;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
    color: #fff;
    position: relative;
    overflow: hidden;
    @media (max-width: 768px) {
        width: 90vw;
    }
`;

const Poster = styled.img`
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
    margin: 1rem 0;
    display: block;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    @media (max-width: 768px) {
        max-width: 300px;
    }
`;

const ReleaseDate = styled(Paragraph)`
    font-weight: bold;
    color: #f5c518;
    margin-top: 0.5rem;
`;

const Rating = styled(Paragraph)`
    font-weight: bold;
    color: #f5c518;
    margin-top: 0.5rem;
`;

const Overview = styled(Paragraph)`
    margin-top: 1rem;
    text-align: center;
`;

const Pages = () => {
    const Local = JSON.parse(localStorage.getItem('response'))
    const Name = Local.original_title ? (Local.original_title) : (Local.name)
    const Launch = Local.first_air_date ? (Local.first_air_date.split('-')) : (Local.release_date.split('-'))
    const PosterLink = `https://image.tmdb.org/t/p/w500${Local.poster_path}`

    return (
        <>
            {Local && (
                <Container>
                    <Title>{Name}</Title>
                    <ReleaseDate>{`Data de lançamento: ${Launch[1]} / ${Launch[2]} / ${Launch[0]}`}</ReleaseDate>
                    <Poster src={PosterLink} alt={`${Name} Poster`} />
                    <Overview>{Local.overview}</Overview>
                    <Rating>{(Local.vote_average).toFixed(1)}</Rating>
                </Container>
            )}
        </>
    )
}
export default Pages
