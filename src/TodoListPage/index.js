import { connect } from 'react-redux';
import TodoListPage from './TodoListPage';
import { addTodo, toggleTodo, deleteTodo } from '../state/todos/todosActions';

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);
