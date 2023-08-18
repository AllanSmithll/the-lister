import React, { useState } from 'react';
import '../styles/TaskCompletedExpansion.css';

const TaskCompletedExpansion = ({ task, title }) => {
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
          {task}
        </div>
      )}
    </div>
  );
};

export default TaskCompletedExpansion;