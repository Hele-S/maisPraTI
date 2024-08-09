import { useState } from "react";
import axios from 'axios'
import styled from 'styled-components'

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
    margin-top: 1em;
`

const Title = styled.h2`
    color: #333;
    text-align: center;
`
const Label = styled.label`
    color: #555;
`
const TranslatedText = styled.p`
    color: #333;
    border-radius: 10px;
`
const LanguageTranslator = () => {
    const  [text, setText] = useState('')
    const  [translatedText, setTranslatedText] = useState('')
    const  [sourceLang, setSourceLang] = useState('en')
    const  [targetLang, setTargetLang] = useState('pt')

    const translateText = async () => {
        try {
            const response = await axios.get('https://api.mymemory.translated.net/get', {
                params: {
                    q: text, // Texto a ser traduzido
                    langpair: `${sourceLang}|${targetLang}`, // Par de línguas para tradução
                  },
            })
            setTranslatedText(response.data.responseData.translatedText)
        } catch (error) {
            console.error(`Erro ao traduzir o texto: ${error}`)
        }
    }


    return (
        <Container>
            <Title> Language Translator </Title>
            <div>
                <Label> Soutce Language: </Label>
                <select value={sourceLang} onChange={(event) => setSourceLang(event.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="pt">Portuguese</option>
                </select>
            </div>

            <div>
                <Label> Target Languge: </Label>
                <select value={targetLang} onChange={(event) => setTargetLang(event.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="pt">Portuguese</option>
                </select>
            </div>

            <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder='Informe o texto que deseja traduzir'
            />

            <button onClick={translateText}>Translate</button>

            {/* Se translatedText for diferente de nulo ele renderiza o componente em seguida */}
            {translatedText && <TranslatedText>{translatedText}</TranslatedText>}
        </Container>
    )
}
export default LanguageTranslator