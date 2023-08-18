import React, { useState } from 'react';
import '../styles/TaskCompletedExpansion.css';

const TaskCompletedExpansion = ({ title, tasks, onTaskToggle }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="task-completed-expansion">
      <div className="task-header" onClick={toggleExpansion}>
        <span className="task-title">{title}</span>
        <span className={`arrow-icon ${expanded ? 'expanded' : ''}`}>&#9660;</span>
      </div>
      {expanded && (
        <div className="task-details">
          <ul>
            {tasks.map(task => (
              <li key={task}>
                <label>
                  <input
                    type="checkbox"
                    checked
                    onChange={() => onTaskToggle(task)}
                  />
                  {task}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskCompletedExpansion;