// import MyChildren from "./components/Filho"
// import { MyProvider } from "./components/Contexto"
import { useState, createContext, useContext } from 'react'

const ThemeContext = createContext({ theme: 'light', toggle: () =>{} })

function App() {

  return (
    <>
      {/* <MyProvider>
        <MyChildren/>
      </MyProvider> */}
    </>
  )
}

export default App
