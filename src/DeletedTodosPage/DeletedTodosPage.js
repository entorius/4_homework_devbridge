import React from 'react';
import PropTypes from 'prop-types';
import DeletedTodosList from './Components/DeletedTodosList';

export default function DeletedTodosPage({
  todos,
}) {
  return (
    <>
      <DeletedTodosList todos={todos.deletedTodos} />
    </>
  );
}

DeletedTodosPage.propTypes = {
  todos: PropTypes.object.isRequired
};