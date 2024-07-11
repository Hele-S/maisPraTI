import { useState } from "react"
import style from "./Counter.module.css"
function Counter() {
    const [count, setCount] = useState(0);

    return (<> <h2>Counter</h2>
        <div className={style.content}>
           
            <button className={style.btn} onClick={() => setCount(count + 1)}>
                Clique aqui
            </button>
            <p>Você clicou {count} vezes</p>
        </div>
        </>)
}

export default Counter