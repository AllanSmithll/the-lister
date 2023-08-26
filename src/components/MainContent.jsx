import { useCallback, useEffect, useState } from 'react';

import  TaskCompletedExpansion  from './TaskCompletedExpansion'

import '../styles/MainContent.css'

const MainContent = () => {
  const [tasksActives, setTasksActives] = useState([]);
  const [tasksCompleteds, setTasksCompleteds] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => { 
    const tasksStorage = localStorage.getItem('tasks');
    if (tasksStorage) {
      setTasksActives(JSON.parse(tasksStorage));
    }

    const tasksCache = JSON.parse(sessionStorage.getItem('tasksCompleteds'));
    if (tasksCache) {
      setTasksCompleteds(tasksCache);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksActives));
    sessionStorage.setItem('tasksCompleteds', JSON.stringify(tasksCompleteds));
  }, [tasksActives, tasksCompleteds]);

  const handleAdd = useCallback(() => {
    if (input !== '') {
      setTasksActives([...tasksActives, input]);
      setInput('');
    }
  }, [input, tasksActives]);

  const handleRemove = useCallback(() => {
    const tasksStorage = localStorage.getItem('tasks');
    if (tasksStorage) {
      setTasksActives([]);
    }
  }, []);

  const handleCheckedItem = useCallback((task) => {
    if (task) {
      if (tasksCompleteds.includes(task)) {
        setTasksCompleteds(tasksCompleteds.filter(completedTask => completedTask !== task));
        setTasksActives([...tasksActives, task]);
      } else {
        setTasksCompleteds([...tasksCompleteds, task]);
        setTasksActives(tasksActives.filter(activeTask => activeTask !== task));
      }
    }
  }, [tasksCompleteds, tasksActives]);

  const handleTaskToggle = task => {
    if (tasksCompleteds.includes(task)) {
      setTasksCompleteds(tasksCompleteds.filter(completedTask => completedTask !== task));
      setTasksActives([...tasksActives, task]);
    } else {
      setTasksCompleteds([...tasksCompleteds, task]);
      setTasksActives(tasksActives.filter(activeTask => activeTask !== task));
    }
  };

  return (
    <main id='main-content'>
      <aside className='tasks-card-container'>
        <h2>To do</h2> {/* Título para as tarefas ativas */}
        <ul className='tasks-list'>
          {tasksActives.map(task => (
            <li key={task} className='visible'>
              <input
                type='checkbox'
                checked={false}
                onChange={() => handleCheckedItem(task)}
              />
              {task}
            </li>
          ))}
        </ul>
        <div className='input-container'>
          <input type='text' value={input} onChange={e => setInput(e.target.value)} />
        </div>
        <div className='buttons-container'>
          <button type='button' onClick={handleAdd}>
            Adicionar tarefa
          </button>
          <button type='button' onClick={handleRemove}>
            Limpar tarefas
          </button>
        </div>
      </aside>
      <div className='the-lister-container'>
        <div className='tasks-completed'>
          <TaskCompletedExpansion
            title="Tarefas concluídas"
            tasks={tasksCompleteds}
            onTaskToggle={handleTaskToggle}
          />
        </div>
      </div>
    </main>
  );
}

export default MainContent;