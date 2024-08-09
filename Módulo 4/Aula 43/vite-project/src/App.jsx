import './App.css'
import LanguageTranslator from './components/LanguageTranslator'
import MovieSearch from './components/MovieSearch'
import QRCodeGenerator from './components/QRCodeGenerator'
import IPAddressFinder from './components/IPAddressFinder'

function App() {

  return (
    <>
    <IPAddressFinder />
    <QRCodeGenerator />
   <MovieSearch/>
   <LanguageTranslator/>
    </>
  )
}

export default App
