import { useState } from "react"
import style from './MirrorText.module.css'
function MirrorText() {
    const [text, newText] = useState(" ");
    return(
        <div id="mirror">
            <h2>Mirror text</h2>
            <textarea id="texto"  onChange={() => newText(document.getElementById("texto").value)}></textarea>
            <p id={'p'} className={style.content}>{text}</p>
            {/* <button onClick={() => setCount(count + 1)}> Clique aqui </button> */}
        </div>
    )
}

export default MirrorText