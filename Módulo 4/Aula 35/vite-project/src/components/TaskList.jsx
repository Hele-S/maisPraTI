import { useState } from "react"
import style from './TaskList.module.css'
function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    // const newItem = () => {
    //     let item = document.createElement("button")
    //     item.innerHTML = document.getElementById("prompt").value
    //     return(item)}
    const addTask = () => {
        setTasks([...tasks, inputValue])
        // document.getElementById("list").appendChild(newItem())

        setInputValue('')}
    
    return (
        <div>
            <h2>Lista de tarefas</h2>
            <div className={style.TESTE}>
                <button  onClick={addTask}>Adcionar Tarefa</button>
                <input id="prompt" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <ul id="list">
            {tasks.map((task, index) => (<>
                    
                    <li key={index} name={index}>
                        {task}</li>
                    </>))}
                
            </ul>
        
        </div>
    )
}

export default TaskList