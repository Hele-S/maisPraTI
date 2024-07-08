import Footer from "./components/footer";
const caixa = {
  texto1: 'socorro',
  texto2: 'me tira daqui'
}
function App() {
  return (
      <Footer texto1={caixa.texto2}/>
  )
}

export default App