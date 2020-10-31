import React from 'react';
import PropTypes from 'prop-types';
import './DeletedTodoItem.styles.css'

export default function TodoItem({ todo}) {
  const { id, content} = todo;

  return (
    <li key={id} className='deleted-todo-item'>
      <span>{content}</span>
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
};