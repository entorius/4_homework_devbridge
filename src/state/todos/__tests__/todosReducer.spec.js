const { ADD_TODO } = require('../todoActionTypes');
const { default: todosReducer } = require('../todosReducer');

describe('todosReducer', () => {
  describe('ADD_TODO action', () => {
    it('should add new todo to the list', () => {
      const initialState = [
        { id: 1, content: 'initial-todo', completed: false },
      ];

      const addTodoAction = {
        type: ADD_TODO,
        payload: {
          id: 2,
          content: 'new-todo',
        },
      };

      const result = todosReducer(initialState, addTodoAction);

      expect(result).toHaveLength(2);
      expect(result[1].id).toBe(2);
      expect(result[1].content).toBe('new-todo');
      expect(result[1].completed).toBe(false);
    });

    it('should not mutate state', () => {
      const initialState = [
        { id: 1, content: 'initial-todo', completed: false },
      ];

      const addTodoAction = {
        type: ADD_TODO,
        payload: {
          id: 2,
          content: 'new-todo',
        },
      };

      const result = todosReducer(initialState, addTodoAction);

      expect(result === initialState).toBe(false);
    });
  });
});
