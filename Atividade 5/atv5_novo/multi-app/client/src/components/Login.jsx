import { useState } from 'react'; // Importa o hook useState do React
import axios from 'axios';
import { LoginContainer, LoginForm, Input, Button} from '../assets/styles/Login-styling'

// Componente principal de Login
// eslint-disable-next-line react/prop-types
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState(''); // Define o estado para o nome de usuário
  const [password, setPassword] = useState(''); // Define o estado para a senha

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Faz a requisição POST ao servidor Express
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password
      });

      // Se a resposta for bem-sucedida, chama a função onLogin
      if (response.status === 200) {
        const { token } = response.data;
        console.log(response, response.data)
        sessionStorage.setItem('token', token); // Armazena o token no sessionStorage
        onLogin(); // Chama a função onLogin
      }
    } catch (error) {
      // Exibe um alerta se as credenciais estiverem incorretas
      alert(`Erro encontrado: ${error}`);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="text"
          value={username} // Valor do campo de entrada é ligado ao estado username
          onChange={(e) => setUsername(e.target.value)} // Atualiza o estado username conforme o usuário digita
          placeholder="Username" // Placeholder do campo de entrada
        />
        <Input
          type="password"
          value={password} // Valor do campo de entrada é ligado ao estado password
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado password conforme o usuário digita
          placeholder="Password" // Placeholder do campo de entrada
        />
        <Button type="submit">Login</Button> {/* Botão que envia o formulário */}
      </LoginForm>
    </LoginContainer>
  );
};

export default Login; // Exporta o componente Login como padrão
