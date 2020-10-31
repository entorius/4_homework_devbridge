import { connect } from 'react-redux';
import Counter from './Counter';
import { increment, decrement } from '../../state/counter/counterActions';

const mapStateToProps = (state) => {
  return {
    value: state.counter,
  };
};

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
