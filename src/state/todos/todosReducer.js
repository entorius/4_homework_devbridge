import initialTodos from '../../initialTodos';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './todoActionTypes';

function handleToggleTodo(todos, id) {
  const index = todos.findIndex((todo) => todo.id === id);
  const todo = todos[index];

  const changedTodo = {
    ...todo,
    completed: !todo.completed,
  };

  return [...todos.slice(0, index), changedTodo, ...todos.slice(index + 1)];
}

export default function todosReducer(state = {todos: initialTodos, deletedTodos:[]}, action = {}) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos,
          {
          ...action.payload,
          completed: false,
          }],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: handleToggleTodo(state.todos, action.payload.id)
      };
    case DELETE_TODO:
      return { 
        deletedTodos: [...state.deletedTodos, 
          state.todos.filter((todo) => todo.id === action.payload.id)[0]],
        todos: state.todos.filter((todo) => todo.id !== action.payload.id)
      };
    default:
      return state;
  }
}
