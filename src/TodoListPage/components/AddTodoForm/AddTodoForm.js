import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddTodoForm.styles.css';

export default function AddTodoForm({ addTodo }) {
  // Use local state to store input value
  const [inputValue, setInputValue] = useState('');

  // Handle inputs onChange to sync input value with local state
  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    // preventDefault so page does not get reloaded
    e.preventDefault();
    // call function to add todo
    addTodo(inputValue);
    // clear input
    setInputValue('');
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button type="submit" className="add-todo-form__submit-btn">
        Add todo
      </button>
    </form>
  );
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
