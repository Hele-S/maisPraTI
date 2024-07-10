import { useState } from "react"

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    
    const addTask = () => {
        setTasks([... tasks, inputValue])
        setInputValue('')
        
    }
    return(
        <div>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={addTask}>Adcionar Tarefa</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList