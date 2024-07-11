import { useState } from "react"
import style from './TaskList.module.css'
function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTask = () => {
        setTasks([...tasks, inputValue])
        setInputValue('')

    }
    return (
        <div>
            <h2>Lista de tarefas</h2>
            <div className={style.TESTE}>
                <button onClick={addTask}>Adcionar Tarefa</button>
                <input   type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <ul>
                {tasks.map((task, index) => (<>
                    
                    <button className={style.delete}>Deletar</button>
                    <li key={index}>{task}</li>
                    <hr></hr>
                    </>))}
            </ul>
        </div>
    )
}

export default TaskList