import { useState } from 'react'
import styled from 'styled-components'
import QRCode from 'qrcode.react'

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
    margin-bottom: 1em;
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
const QRContainer =styled.div`
    
`
const QRCodeGenerator = () => {
    const [text, setText] = useState('')
    return (
        <Container>
            <Title> QR Code Generator </Title>
            <Input
                type='text'
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            {text && (
            <QRContainer>
                <QRCode 
                value={text}
                size={100}    
                />
            </QRContainer>

            )}
        </Container>
    )
}
export default QRCodeGenerator