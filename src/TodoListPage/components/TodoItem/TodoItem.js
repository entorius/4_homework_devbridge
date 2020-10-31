import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.styles.css';

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const { id, content, completed } = todo;

  const handleToggleClick = () => toggleTodo(id);
  const handleDeleteClick = () => deleteTodo(id);

  return (
    <li className={completed ? 'todo-item completed' : 'todo-item'}>
      <span>{content}</span>
      <div>
        <button
          className={completed ? 'btn-revert' : 'btn-complete'}
          onClick={handleToggleClick}
          type="button"
        >
          {completed ? 'Revert' : 'Complete'}
        </button>
        <button
          className="btn-delete"
          onClick={handleDeleteClick}
          type="button"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

// Take notice of this propTypes definition.
// If you will not pass a required prop or pass prop of wrong type you will get an error in console (only in development)
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    completed: PropTypes.bool,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
