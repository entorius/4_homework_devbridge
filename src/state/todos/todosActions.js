import { v4 as uuid } from 'uuid';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './todoActionTypes';

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: uuid(),
    content,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});
