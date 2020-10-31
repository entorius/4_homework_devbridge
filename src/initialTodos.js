import { v4 as uuid } from 'uuid';

const initialTodos = [
  { id: '1', content: 'Create page structure', completed: false },
  { id: uuid(), content: 'Add some styles', completed: false },
  { id: uuid(), content: 'Add dynamic functionality', completed: false },
];

export default initialTodos;
