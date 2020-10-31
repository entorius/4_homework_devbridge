import { connect } from 'react-redux';
import TodoPage from './TodoPage';

const mapStateToProps = (state) => ({
  todos: state.todos,
});


export default connect(mapStateToProps)(TodoPage);