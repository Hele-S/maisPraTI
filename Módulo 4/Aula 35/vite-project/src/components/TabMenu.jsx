import { useState } from 'react'
import style from './TabMenu.module.css'
function TabMenu() {
    const tab1 =
    <ul>
            <li>React é muito confuso</li>
            <li>Não to entendendo nada</li>
            <li>Vai ficar uma bunda</li>
        </ul>;
    const tab2 =
        <ul>
            <li>A tab 2 tem coisas mais positivas</li>
            <li>White Noise não ajuda em nada</li>
            <li>Hoje vou conseguir fazer minhas coisas</li>
        </ul>;
    const tab3 =
        <ul>
            <li>Acabando as ideias de itens</li>
            <li>Não sei se é assim que faz</li>
            <li>Depois tem que colocar estilo ainda</li>
        </ul>;
            const [tab, setTab] = useState(tab1)
    return (
        <div>
            <h2>Menu de abas</h2>
            <div className= {style.btns}>
                <button onClick={() => setTab(tab1)}>Home</button>
                <button onClick={() => setTab(tab2)}>Login</button>
                <button onClick={() => setTab(tab3)}>Register</button>
            </div>
            <div className= {style.content}>
                {tab}
            </div>
        </div>
    )
}

export default TabMenu