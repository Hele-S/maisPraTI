
import styled from 'styled-components'
const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin:0 auto;
    min-width: 30%;
    width:fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    padding:48px 68px;
`
const Title = styled.h1`
    font-size:2em;
    font-family:Arial, Helvetica, sans-serif;
    color: #FFFF;
    justify-self:baseline;
    margin-right:auto;
`

const Input = styled.input`
    padding: 1.5rem 1rem 0.5rem 1rem;
    line-height: 1.5rem;
    width:100%;
    border-radius:4px;
    color: #FFFF;
    background:transparent;
    background-color: inherit;
    filter: opacity(100%);
    ::placeholder{
    color:#B7B7B7;
    }
`

const InputLabel = styled.label`
    font-family:Arial, Helvetica, sans-serif;
    position:relative;
    color: #B7B7B7;
    font-size:0.9rem;
    margin-right: auto;
    /* margin-top:1rem; */
    transform: translateY(130%);
`

const LoginSection = () => {

    return (<>
        <Container>
            <Title>Entrar</Title>
            <InputLabel> Email ou número de celular
            </InputLabel>
                <Input
                    placeholder="Email ou número de celular"
                />
            
        </Container>
    </>)
}

export default LoginSection