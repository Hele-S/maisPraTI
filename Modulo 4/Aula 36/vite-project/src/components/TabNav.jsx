import { useState } from 'react'
import style from './TabNav.module.css'

const contents = [
    [
        'Conteúdo 1',
        'Conteúdo 2',
        'Conteúdo 3'
    ],
    [
        'Conteúdo 4',
        'Conteúdo 5',
        'Conteúdo 6'
    ],
    [
        'Conteúdo 7',
        'Conteúdo 8',
        'Conteúdo 9'
    ]
]

function TabNav() {
    const [state, setState] = useState(0)

    return (
        <>
            <div>
                <header>
                    <img src="" alt="" />
                    <h1>Aula +praTi - React.Js</h1>
                    <p>Exercício para treinar &quotuseState$quot</p>
                </header>
            </div>
            <div id="tabs">
                <nav>
                    <button className={style.btn} onClick={() => setState(0)} >Go</button>
                    <button className={style.btn} onClick={() => setState(1)} >Go</button>
                    <button className={style.btn} onClick={() => setState(2)} >Go</button>
                </nav>
            </div>
            <div className={style.content} id="content">
                <ul>
                    {contents[state].map((item) => { return(
                        <li key={item}>{item}</li>
                    )})}
                </ul>
            </div>
        </>)
}
export default TabNav