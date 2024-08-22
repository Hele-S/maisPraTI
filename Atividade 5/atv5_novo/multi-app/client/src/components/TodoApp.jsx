/* eslint-disable react-hooks/exhaustive-deps */
// Importa os hooks useState e useEffect da biblioteca React para gerenciar estado e efeitos colaterais.
import { useState, useEffect } from 'react';
// Importa a biblioteca axios para fazer requisições HTTP.
import axios from 'axios';
// Importa os componentes estilizados para renderizar
import { Container, Title, Input, Button, TaskList, TaskItem, EditInput } from '../assets/styles/TodoApp-styling'

// Define a URL da API que será usada para obter, adicionar, editar e excluir tarefas.
const API_URL = 'http://localhost:3000/tasks';


// Define o componente funcional TodoApp.
const TodoApp = () => {
  // Usa o hook useState para criar variáveis de estado para a tarefa atual, lista de tarefas, tarefa em edição e texto da tarefa em edição.
  const [task, setTask] = useState(''); // Estado para a nova tarefa a ser adicionada.
  const [tasks, setTasks] = useState([]); // Estado para a lista de tarefas.
  const [editingTaskId, setEditingTaskId] = useState(null); // Estado para o id da tarefa que está sendo editada.
  const [editingTaskText, setEditingTaskText] = useState(''); // Estado para o texto da tarefa que está sendo editada.

  // Usa o hook useEffect para buscar as tarefas quando o componente é montado.
  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  // Função que busca as tarefas da API e atualiza o estado com as tarefas recebidas.
  const fetchTasks = async () => {
    const response = await axios.get(API_URL); // Faz uma requisição GET para obter as tarefas.
    
    
    if (JSON.stringify(response.data) != JSON.stringify(tasks)) {
      setTasks(response.data); // Atualiza o estado com os dados recebidos.
    }
  };

  // Função que adiciona uma nova tarefa.
  const addTask = async () => {
    try {
      if (task) { 
        const newTask = { text: task };
        
        // Espera a resposta da adição da nova tarefa.
        const response = await axios.post(API_URL, newTask);
        
        // Atualiza o estado localmente com a nova tarefa.
        setTasks(prevTasks => [...prevTasks, response.data]);
  
        // Limpa o campo de entrada.
        setTask(''); 

      }
    } catch (error) { 
      console.error('Erro ao adicionar tarefa:', error);
    } finally {
      console.log('Tarefa adicionada com sucesso.');
    }
  };
  
  
  // Função que exclui uma tarefa.
  const deleteTask = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`); // Faz uma requisição DELETE para excluir a tarefa com o id fornecido.
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id)); // Atualiza o estado removendo a tarefa excluída.
    } catch (error) {
        console.error('Failed to delete task:', error);
        // Opcional: Adicionar tratamento de erro, como mostrar uma notificação ao usuário
    }
};

  // Função que inicia o processo de edição de uma tarefa.
  const editTask = (id, text) => {
    setEditingTaskId(id); // Define o id da tarefa que está sendo editada.
    setEditingTaskText(text); // Define o texto da tarefa que está sendo editada.
  };

  // Função que atualiza uma tarefa existente.
  const updateTask = async (id) => {
    const updatedTask = { text: editingTaskText }; // Cria um objeto de tarefa com o texto atualizado.
    /*const response = */await axios.put(`${API_URL}/${id}`, updatedTask); // Faz uma requisição PUT para atualizar a tarefa.
    setTasks(tasks.map(task => (task.id === id ? { ...task, text: editingTaskText } : task))); // Atualiza o estado com a tarefa modificada.
    // setTasks(response); // Atualiza o estado com a tarefa modificada.
    setEditingTaskId(null); // Limpa o id da tarefa em edição.
    setEditingTaskText(''); // Limpa o texto da tarefa em edição.
    console.log(tasks)
  };

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <Container>
      <Title>Todo App</Title> {/* Exibe o título do aplicativo de tarefas */}
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <Button onClick={() => {addTask()/*console.log(tasks)*/}}>Add Task</Button>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            {editingTaskId === task.id ? (
              <EditInput
                type="text"
                value={editingTaskText}
                onChange={(e) => setEditingTaskText(e.target.value)}
                onBlur={() => updateTask(task.id)}
              />
            ) : (
              <>
                {task.text}
                <div>
                  <button onClick={() => editTask(task.id, task.text)}>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </>
            )}
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

// Exporta o componente TodoApp para que possa ser utilizado em outras partes da aplicação.
export default TodoApp;
