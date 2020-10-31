import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';

export default function TodoPage({todos}) {
  const {id} = useParams(); 
  const todo = todos.todos.filter(todoItem => todoItem.id === id);
  return (
    <>
      <h1>
        Todo id: 
        {todo[0].id}
      </h1>
      <h2> 
        {todo[0].content}
      </h2>
      <h2> 
        {todo[0].completed ? '' : 'not '}
        completed 
        
      </h2>
    </>
  );
}

TodoPage.propTypes = {
  todos: PropTypes.array.isRequired,
};