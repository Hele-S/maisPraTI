import { useState } from "react"
import style from './TaskList.module.css'
function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    // let qtdItens = 0

    const addTask = () => {
        setTasks([...tasks, inputValue])
        setInputValue('')
        // ids.remove()
    }
    // const de = document.getElementById('hr')
    return (
        <div>
            <h2>Lista de tarefas</h2>
            <div className={style.TESTE}>
                <button onClick={addTask}>Adcionar Tarefa</button>
                <input   type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <ul className={style.TaskList}>
                {tasks.map((task, index) => (<>
                    
                    <div className={style.item}id={index}>
                    <button className={style.delete} onClick={() => {document.getElementById(index).remove()}} >Deletar</button>
                    <li className={style.item} key={index}>{task}</li>
                    <hr></hr>
                    </div>
                    </>))}
            </ul>
        </div>
    )
}
// onClick={document.getElementById('0').remove()}
export default TaskList