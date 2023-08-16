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
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  const handleAdd = useCallback(() => {
    if (input !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  }, [input, tasks]);

  const handleRemove = useCallback(() => {
    const tasksStorage = localStorage.getItem('tasks');
    if (tasksStorage) {
      setTasks([]);
    }
  }, []);

  return(
    <div className='the-lister-container'>
      <header id='header-container'>
        <h1 id='title'>The Lister</h1>
      </header>
      <main id='main-content'>
        <ul className='tasks-list'>
          {tasks.map (task =>
              <li key={task}>{task}
                <input type='checkbox' 
                checked={task.checked}/>
              </li>
            )}
        </ul>
        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
        <div className='buttons-container'>
          <button type='button' onClick={handleAdd}>
            Adicionar tarefa
          </button>
          <button type='button' onClick={handleRemove}>
            Limpar tarefas
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
