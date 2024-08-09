import { useState } from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    color: #333;
    text-align: center;
    margin:0;
`

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

const User = styled.input`
    
`

const Password = styled.input`
    
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:right;
`
const Button = styled.button`
    
`
/* eslint-disable react/prop-types */
const LoginScreen = ({ LoggedIn }) => {

    const [text, setText] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setText(prevText => ({
            ...prevText,
            [name]: value

        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!text.username || !text.password) {
            alert('Preencha todos os campos')
        } else {
             alert(`Login efetuado com sucesso!`) 
             LoggedIn()
            }
    }

    return (
        <Container>
            <Title>Login</Title>
            <Form>
                <label htmlFor="username">Usuário:
                </label>
                    <User
                        id='username'
                        type='text'
                        name='username'
                        value={text.username}
                        onChange={handleChange}
                    />
                
                
                <label htmlFor="password"> Senha:</label>
                    <Password
                        id='password'
                        type='password'
                        name='password'
                        value={text.password}
                        onChange={handleChange}
                    />
            </Form>
                <br />
                <Button onClick={handleSubmit}>Enviar</Button>
        </Container>
    )
}
export default LoginScreen