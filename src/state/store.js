import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counterReducer';
import todosReducer from './todos/todosReducer';
import notesReducer from './notes/notesReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  counter: counterReducer,
  notes: notesReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
