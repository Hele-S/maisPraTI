import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
// import LoginFooter from './LoginFooter'


const Background = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  width: 100vw;
  height:100vh;
  top:0;
  left:0;
  background-image: url('./src/assets/imgs/Login_Background.jpg'); /* Altere para a URL da sua imagem */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; /* Ajusta para cobrir toda a área */
  transition: transform 0.3s ease; /* Transição suave, opcional */
  &::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index:0;
}
`
const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    box-sizing: flex;
    display: flex;
    flex-direction: column;
    margin:0 auto;
    width: 314px;
    height: 641px;
    position: relative;
    
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
    margin-bottom: 28px;
`

const Form = styled.form`
    width:100%;
    display:grid;
    gap:16px;
`

const InputContainer = styled.div`
    position:relative;
    width:100%;
    height:fit-content;
    /* min-width:inherit; */
`
const Input = styled.input`
    padding: 1.5rem 1rem 0.5rem 1rem;
    line-height: 1.5rem;
    /* max-width:100%; */
    width:calc(100% - 2rem);
    border-radius:4px;
    color: #FFFF;
    border-width:1px;
    border-style:solid;
    border-color: #5E5E5E;
    background:transparent;
    background-color: inherit;
    &::placeholder{
    color:#B7B7B7;
    display: ${(props) => (props.show == 'true' ? 'flex' : 'none')};
    padding-top: 0.5rem; /* Ajuste o valor conforme necessário */
    transform: translateY(-0.5rem); /* Ajuste o valor conforme necessário */
    }

`

const InputLabel = styled.label`
    all: unset;
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    color: #B7B7B7;
    font-size: 0.7rem;
    margin-left:1rem;
    margin-right: auto;
    top:12px;
    /* transform: translateY(130%); */
    z-index: 1;

    display: ${(props) => (props.show ? 'block' : 'none')};
`

const Button = styled.button`
    width:100%;
    background-color:#E50914;
    color:#FFFF;
    border:none;
    display:flex;
    justify-content:center;
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    border-radius:4px;
    font-weight:bold;
    &:hover{
        background-color:#c11119;
        cursor:pointer;
    }
    &.AccessCode{
       background-color: rgba(81, 81, 81, 0.7);
       &:hover{
        background-color: rgba(69, 69, 69, 0.7);
       }
    }
`

const Paragraph = styled.p`
    margin: 0 auto;
    color: #ffffffb2;
    font-family:Arial, Helvetica, sans-serif;
    &.SignIn{
        margin:unset;
        margin-right:auto;
    }
    &.Captcha{
        margin:13px 0 13px;
        font-size:13px;
        color:#8c8c8c;
    }
`

const Link = styled.a`
    text-decoration:none;
    font-family:Arial, Helvetica, sans-serif;
    &:hover {
        text-decoration:underline;
        cursor:pointer;
    }
    &.ForgotPassword{
        color:#FFFF;
        margin: 0 auto;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        &:hover{
            color:#c3c3c3;
        }
    }
    &.SignIn{
        color:#FFFF;
        margin: 0 auto;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight:bold;
    }
    &.Captcha{
        color:#0071eb;
    }
    &.footer{
        color:#ffffffb2;
        text-decoration:underline;
    }
`

const Checkbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1.5px solid #a5a5a5;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
  outline: none;
    &:checked {
    border-color: #FFF;
    background-color: #FFF;
  }
  &:checked::before {
    content: '✔';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    font-size: 1.2em;
    line-height: 1;
  }

  &:checked:hover {
    background-color: #B3B3B3;
    border-color: #B3B3B3;
    }
    
    &:hover{
    border-color: #FFF;
    }

  /* &:focus {
    outline: 3px solid #FFF;
    outline-offset:2px;
  } */
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-right: auto;
  margin-bottom:16px;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  cursor: pointer;
  
  input {
    margin-right: 8px; 
  }
`;

const CaptchaDiv = styled.div`
    display: flex;
    width:100%;
    height:162px;
    margin-top:11px;
`
const Logo = styled.img`
height:42px;
width:144px;
z-index:3;
`

const Header = styled.header`
padding: 24px 48px;
z-index:1;
width:calc(100vw-48px);
`

const FooterPadd = styled.div`
background: linear-gradient(to top, black, rgba(0, 0, 0, 0.7));
position:absolute;
width:100vw;
height:6rem;
display:flex;
left:0;
transform:translateY(-6rem);
width:calc(100vw-50px);
/* align-items:baseline; */
`
const FooterContainer = styled.footer`
background-image: url('https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png');
background-size:cover;
background-repeat: no-repeat;
background-clip: padding-box;
padding-top: 20px;
padding-left: 50px;
position: relative;
bottom:0;

z-index: 1;
`
const FooterLinks = styled.ul`
padding: 0 48px;
list-style:none;
display: grid;
grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );
grid-template-rows: 1fr 1fr 1fr;
`

const FooterItem = styled.li`
margin: 16px 0 5px 12px;
`

const LoginSection = () => {
    const navigate = useNavigate();
    const [emailFocused, setemailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [inputStates, setInputStates] = useState({
        'Email': 0,
        'Password': 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputStates((prevStates) => ({
            ...prevStates,
            [name]: value.length
        }));
        console.log(inputStates)
    };

    const showEmailLabel = emailFocused || inputStates.Email > 0;
    const showPasswordLabel = passwordFocused || inputStates.Password > 0;

    const handleSubmit = () => {
        navigate('/Home')
    }
    return (
        <>
            <Background>
                <Header>
                    <Link href="#"><Logo src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="Logo Netflix" /></Link>
                </Header>
                <Container>
                    <Title>Entrar</Title>
                    <Form>
                        <InputContainer>
                            <InputLabel show={showEmailLabel}>
                                Email ou número de celular
                            </InputLabel>
                            <Input
                                name='Email'
                                show={showEmailLabel}
                                type='text'
                                placeholder={showEmailLabel ? "" : "Email ou número de celular"}
                                onFocus={() => setemailFocused(true)}
                                onBlur={() => setemailFocused(false)}
                                onChange={handleChange}
                            />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel show={showPasswordLabel}>
                                Senha
                            </InputLabel>
                            <Input
                                name="Password"
                                show={showPasswordLabel}
                                type='password'
                                placeholder={showPasswordLabel ? "" : "Senha"}
                                onFocus={() => setPasswordFocused(true)}
                                onBlur={() => setPasswordFocused(false)}
                                onChange={handleChange}
                            />
                        </InputContainer>
                        <Button onClick={handleSubmit} >Entrar</Button>
                        <Paragraph>OU</Paragraph>
                        <Button className='AccessCode'>Usar um código de acesso</Button>
                        <Link
                            href='#'
                            className='ForgotPassword'
                        >Esqueceu a senha?
                        </Link>
                    </Form>
                    <CheckboxLabel>
                        <Checkbox
                            type="checkbox"
                        />
                        Lembre-se de mim
                    </CheckboxLabel>
                    <Paragraph className='SignIn'>Novo por aqui? <Link className='SignIn'>Assine agora</Link></Paragraph>
                    <CaptchaDiv>
                        <Paragraph className='Captcha'>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <Link className='Captcha'>Saiba mais.</Link></Paragraph>
                    </CaptchaDiv>
                </Container>
            </Background>

            <FooterContainer>
                <FooterPadd>
                </FooterPadd>
                <Paragraph>Dúvidas? Ligue <Link>0800 591 2876</Link></Paragraph>
                <FooterLinks>
                    <FooterItem><Link className='footer'>Perguntas frequentes</Link></FooterItem>
                    <FooterItem><Link className='footer'>Central de Ajuda</Link></FooterItem>
                    <FooterItem><Link className='footer'>Termos de Uso</Link></FooterItem>
                    <FooterItem><Link className='footer'>Privacidade</Link></FooterItem>
                    <FooterItem><Link className='footer'>Preferências de cookies</Link></FooterItem>
                    <FooterItem><Link className='footer'>Informações corporativas</Link></FooterItem>
                </FooterLinks>
            </FooterContainer>

        </>
    );
};

export default LoginSection;
