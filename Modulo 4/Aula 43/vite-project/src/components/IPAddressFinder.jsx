import axios from 'axios'
import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color: #b3b3b3;
    margin: auto;
    padding: 15px;
    width: fit-content;
    max-height:30em;
    margin-bottom: 1em;
    vertical-align: middle;

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

const Board = styled.ul`
    display:flex;
    flex-direction:column;
    padding-left:0;

    list-style: none;
`
const Item = styled.li`
    text-decoration:underline;
`
const Button = styled.button`
    background-color: gray;
    color: white;
    font-weight: bold;
    margin-bottom: 5px;
`
const IPAddressFinder = () => {
    const [text, setText] = useState('')
    const [IP, setIP] = useState(null)
   
    const HandleSearch = async () => {
        try {
            const response = await axios.get(`https://freeipapi.com/api/json/${text}`)
            setIP(response.data)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
        
    }


    return (
        
        <Container>
            <Title> IP Finder </Title>
            <Input
                type='text'
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder='Insira o Endereço de IP'
            />
            {IP && (
                <Board>
                    <Item>Continente: {IP.continent}</Item>
                    <Item>País: {IP.countryName}</Item>
                    <Item>Cidade: {IP.cityName}</Item>
                    <Item>Latitude: {IP.latitude}</Item>
                    <Item>Longitude: {IP.longitude}</Item>

                </Board>

            )}
            <Button onClick={HandleSearch}> Buscar </Button>
        </Container>
    )
}



export default IPAddressFinder