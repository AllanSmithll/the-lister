import React, { useState } from 'react';
import '../styles/TaskCompletedExpansion.css';

const TaskCompletedExpansion = ({ task }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="task-completed-expansion">
      <div className="task-header" onClick={toggleExpansion}>
        <span className="task-title">{task}</span>
        <span className={`arrow-icon ${expanded ? 'expanded' : ''}`}>&#9660;</span>
      </div>
      {expanded && (
        <div className="task-details">
          {/* Render additional information here */}
          Additional details for task: {task}
        </div>
      )}
    </div>
  );
};

export default TaskCompletedExpansion;