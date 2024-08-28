
# Multi-app

## Visão Geral

**O Multi-app** é uma aplicação web multifuncional que oferece diversas ferramentas úteis em uma única plataforma. Com uma interface amigável, os usuários podem acessar diferentes funcionalidades através de uma barra de navegação lateral ou de um carrossel interativo.

## Funcionalidades

- **Pesquisa de Endereço de IP**
  - Descubra informações detalhadas sobre qualquer endereço de IP, incluindo localização geográfica.

- **Tradutor de Texto**
  - Traduza textos de um idioma para outro de forma rápida e eficiente.

- **Pesquisa de Filmes no IMDb**
  - Encontre informações sobre filmes, incluindo título e ano de lançamento.

- **Gerador de Código QR**
  - Converta textos em códigos QR para facilitar o compartilhamento e o acesso rápido a informações.

- **Quiz Matemático**
  - Teste seus conhecimentos com um quiz simples de duas perguntas matemáticas.

- **Lista de Tarefas**
  - Gerencie suas tarefas diárias adicionando, removendo e editando itens conforme necessário.

## Navegação

Os usuários podem selecionar a ferramenta desejada através de duas opções de navegação:

- **Barra de Navegação Lateral**
  - Acesse rapidamente qualquer funcionalidade diretamente pela barra lateral.

- **Carrossel Interativo**
  - Navegue pelas ferramentas utilizando um carrossel onde cada item representa uma das funcionalidades disponíveis.

## Autenticação e Segurança

Para acessar qualquer uma das ferramentas, é necessário realizar um **login**. Após o login, o usuário recebe um **JSON Web Token (JWT)** que é armazenado na **session storage** do navegador.

- **Expiração do Token:** 180 segundos.
- Se o token expirar, ao tentar trocar de página ou utilizar qualquer recurso, o usuário será automaticamente redirecionado para a tela de login.

## Tecnologias Utilizadas

- **Código:**
  - HTML5
  - CSS
  - JavaScript
  - React
    
- **Autenticação:**
  - JSON Web Tokens (JWT)

## Instalação

### Pré-requisitos

- **Node.js** (v14 ou superior)
- **npm** ou **yarn**

### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Hele-S/maisPraTI.git
   ```
2. **Acesse o diretório do projeto:**

   ```bash
   cd "Atividade 5\atv5_novo\multi-app"
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

4. **Execute ambos os servidores client e server:**

   ```bash
   npm run dev
   ```
   
5. **Inicie a aplicação:**

Abra http://localhost:5173 no seu navegador.

## Uso

1. **Cadastro/Login:**
   - Acesse a página de login e autentique-se com o Username "admin" e a senha "password".

2. **Navegação:**
   - Utilize a barra de navegação lateral ou o carrossel para selecionar a ferramenta desejada.

3. **Utilização das Ferramentas:**
   - Cada ferramenta possui sua própria interface e funcionalidades específicas.

4. **Sessão Expirada:**
   - Após 180 segundos, o token de autenticação expirará.
   - Ao tentar acessar uma nova página ou utilizar uma ferramenta, você será redirecionado para a tela de login para renovar a sessão.

## Contato

Para mais informações, sugestões ou dúvidas, entre em contato:

- **Email:** helenaldodasilva@gmail.com
- **GitHub:** [Hele-S]([https://github.com/Hele-S])
