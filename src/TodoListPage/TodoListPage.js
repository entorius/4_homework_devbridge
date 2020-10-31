import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

export default function TodoListPage({
  todos,
  toggleTodo,
  deleteTodo,
  addTodo,
}) {
  return (
    <>
      <TodoList todos={todos.todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

TodoListPage.propTypes = {
  todos: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};
