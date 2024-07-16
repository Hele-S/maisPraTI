import { useState, createContext, useContext } from 'react'

const PreferencesContext = createContext()

function Desafio1() {

    const [preferences, setPreferences] = useState({ theme: 'light', language: 'en' })

    const toggleTheme = () => {
        setPreferences(currentTheme => ({
            ...currentTheme,
            theme: currentTheme.theme === 'light' ? 'dark':'light'
    }))}

    const changeLanguage = (language) => {
        setPreferences(currentLanguage => ({
            ...currentLanguage,
            language: language
        }))
    }
    return (
        <>
            <PreferencesContext.Provider value={{ preferences, toggleTheme, changeLanguage }}>

                <div style={{ backgroundColor: preferences.theme === 'light' ? 'white' : 'black', color: preferences.theme === 'light' ? 'black' : 'white' }}>
                    <Toolbar />
                    <button onClick={toggleTheme}>Trocar o Tema</button>
                    <button onClick={() => changeLanguage('pt-br')}>PT-BR</button>
                    <button onClick={() => changeLanguage('en')}>ENG</button>
                </div>
            </PreferencesContext.Provider>
        </>
    )
}
function Toolbar() {
    const { theme } = useContext(PreferencesContext)

    return (

        console.log(theme),
        <div style>
            Tema utilizado - {theme}
        </div>
    )
}

export default Desafio1