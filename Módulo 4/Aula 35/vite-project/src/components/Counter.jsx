import { useState } from "react"

function Counter() {
    const [text, newText] = useState();
    
    return(
        <div id="mirror">
            <textarea id="texto" onChange={() => newText(document.getElementById("texto").value)}></textarea>
            <p>{text}</p>
            {/* <button onClick={() => setCount(count + 1)}> Clique aqui </button> */}
        </div>
    )
}

export default Counter