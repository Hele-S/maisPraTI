// import MyChildren from "./components/Filho"
// import { MyProvider } from "./components/Contexto"
import { useState, createContext, useContext } from 'react'

const ThemeContext = createContext({ theme: 'light', toggle: () =>{} })

function App() {

  const [ theme, setTheme ] = useState('light')
   
  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light'? 'dark' : 'light')
  }

  return (
    <>
      {/* <MyProvider>
        <MyChildren/>
      </MyProvider> */}
      <ThemeContext.Provider value={{ theme, toggleTheme}}>
        <div style={{backgroundColor: theme === 'light'? 'white':'black', color: theme === 'light'?'black':'white'}}>
          <Toolbar />
          <button onClick={toggleTheme}>Trocar o Tema</button>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

function Toolbar() {
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      Tema utilizado - {theme}
    </div>
  )
}

export default App
