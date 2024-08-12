import Footer from "./components/footer";
import Props from "./components/props";
const caixa = {
  texto1: 'socorro',
  texto2: 'me tira daqui'
}
function App() {
  return (
    <Props/>
      <Footer texto1={caixa.texto2}/>
  )
}

export default App