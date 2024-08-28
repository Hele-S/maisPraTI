import { useState } from 'react'
import styled from 'styled-components'
const Background = styled.div`
  position:relative;
  width: 100%;
  height: 100vh; /* Altura do contêiner */
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url('./src/assets/imgs/Login_Background.jpg');
  background-repeat: no-repeat; /* Impede a repetição da imagem */
  background-size: cover; /* Faz a imagem cobrir o contêiner */
  background-position: baseline; /* Centraliza a imagem */
  overflow:hidden;
  background-size:112%;
  &::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor preta com 50% de opacidade */
  /* Ajuste o valor da opacidade conforme necessário */
  pointer-events: none; /* Permite interações através do pseudo-elemento */
}
`
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
    z-index:0;
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
    border-width:1px;
    border-style:solid;
    border-color: #5E5E5E;
    background:transparent;
    background-color: inherit;
    /* filter: opacity(100%); */
    &::placeholder{
    color:#B7B7B7;
    display: ${(props) => (props.show == 'true' ? 'flex' : 'none')};
    /* transform: translateY(1030%); */
    padding-top: 0.5rem; /* Ajuste o valor conforme necessário */
    transform: translateY(-0.5rem); /* Ajuste o valor conforme necessário */
    }

`

const InputLabel = styled.label`
    all: unset;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
    color: #B7B7B7;
    opacity: ${(props) => (props.show ? 1 : 0)};
    font-size: 0.7rem;
    margin-right: auto;
    transform: translateY(130%);
    z-index: 1;
`;

const LoginSection = () => {
    // Verifica o estado de foco do input
    const [isFocused, setIsFocused] = useState(false);

    // Verifica o comprimento do texto do input
    const [inputLength, setInputLength] = useState(0);

    // Lida com a mudança de valor do input
    const handleChange = (e) => {
        setInputLength(e.target.value.length);
    };

    const showLabel = isFocused || inputLength > 0;

    return (
        <>
            <Background>
                <Container>
                    <Title>Entrar</Title>
                    <InputLabel show={showLabel}>
                        Email ou número de celular
                    </InputLabel>
                    <Input
                        show={showLabel}
                        type='text'
                        placeholder={showLabel ? "" : 'Email ou número de celular'}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={handleChange}
                    />
                </Container>
            </Background>
        </>
    );
};

export default LoginSection;