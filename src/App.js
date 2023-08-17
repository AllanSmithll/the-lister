import { useCallback, useEffect, useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import  TaskCompletedExpansion  from './components/TaskCompletedExpansion'

import './styles/App.css';

function App() {
  const [tasksActives, setTasksActives] = useState([]);
  const [tasksCompleteds, setTasksCompleteds] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => { 
    const tasksStorage = localStorage.getItem('tasks');
    if (tasksStorage) {
      setTasksActives(JSON.parse(tasksStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksActives));
  }, [tasksActives])

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

  return(
    <div className='the-lister-container'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
      <header id='header-container'>
        <h1 id='title'>The Lister</h1>
      </header>
      <main id='main-content'>
        <aside className='tasks-card-container'>
          <ul className='tasks-list'>
            {tasksActives.map (task =>
                <li key={task}><input type='checkbox' checked={false} onChange={() => handleCheckedItem(task)}/>{task}
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
        </aside>
        <div className='the-lister-container'>
      {/* Resto do seu JSX */}
      <div className='tasks-completed'>
        <h2>
          Tarefas concluídas
        </h2>
        <ul className='task-completed-list'>
          {tasksCompleteds.map(task =>
            <li key={task}>
              <TaskCompletedExpansion task={task} />
            </li>
          )}
        </ul>
      </div>
    </div>
      </main>
    </div>
  );
}

export default App;
