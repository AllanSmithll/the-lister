import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => { 
    const tasksStorage = localStorage.getItem('tasks');
    if (tasksStorage) {
      setTasks(JSON.parse(tasksStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleAdd = useCallback(() => {
    setTasks([...tasks, input]);
    setInput('');
  }, [input, tasks]);

  const handleRemove = useCallback(() => {
    setTasks([]);
  }, []);

  return(
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task}>{task}</li>
        ))}
      </ul>
      <br/>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button type='button' onClick={handleAdd}>
        Adicionar tarefa
      </button>
      <button type='button' onClick={handleRemove}>
        Limpar tarefas
      </button>
    </div>
  );
}

export default App;
