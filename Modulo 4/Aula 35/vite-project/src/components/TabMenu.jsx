import { useState } from 'react'
import style from './TabMenu.module.css'
function TabMenu() {
    const tab1 =
    <ul>
            <li>item 1 aba 1</li>
            <li>item 2 aba 1</li>
            <li>item 3 aba 1</li>
        </ul>;
    const tab2 =
        <ul>
            <li>item 1 aba 2</li>
            <li>item 2 aba 2</li>
            <li>item 3 aba 2</li>
        </ul>;
    const tab3 =
        <ul>
            <li>item 1 aba 3</li>
            <li>item 2 aba 3</li>
            <li>item 3 aba 3</li>
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