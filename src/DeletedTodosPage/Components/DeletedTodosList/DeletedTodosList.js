import React from 'react';
import PropTypes from 'prop-types';
import './DeletedTodosList.styles.css';
import TodoItem from '../DeletedTodoItem';

export default function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};