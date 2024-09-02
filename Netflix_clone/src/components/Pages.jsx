/* eslint-disable react/prop-types */
import styled from 'styled-components'
// import { useState } from 'react'

const Title = styled.h1`
    
`
const Paragraph = styled.p`
`
const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:70vw;
    justify-content:center;
    margin:0 auto;
`
// console.log(JSON.parse(Local).name)

const Pages = () => {
    const Local = JSON.parse(localStorage.getItem('response'))
    const Name = Local.original_title ? (Local.original_title) : (Local.name)
    const Launch = Local.first_air_date ? (Local.first_air_date.split('-')) : (Local.release_date.split('-'))
    const PosterLink = `https://image.tmdb.org/t/p/w500${Local.poster_path}`
    // console.log(Local)

    // console.log(Target('original_title'))
    return (
        <>
            {Local && <>
                <Container>
                    <Title>{Name}</Title>
                    <Paragraph>{`Data de lançamento: ${Launch[1]} / ${Launch[2]} / ${Launch[0]}`}</Paragraph>
                    <Paragraph>{Local.overview}</Paragraph>
                    <Paragraph>{(Local.vote_average).toFixed(1)}</Paragraph>
                    <Paragraph><img src={PosterLink} alt="" /></Paragraph>
                </Container>
            </>}

            {/* <Title>{JSON.parse(localStorage.getItem('response'))}</Title> */}


        </>
    )
}
export default Pages