import { connect } from 'react-redux';
import TodoListPage from './DeletedTodosPage';

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoListPage);
