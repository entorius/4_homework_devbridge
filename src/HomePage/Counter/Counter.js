import React from 'react';
import PropTypes from 'prop-types';

export default function Counter({ value, onIncrement, onDecrement }) {
  return (
    <div>
      <div>{value}</div>
      <div>
        <button onClick={onIncrement} type="button">
          +
        </button>
        <button onClick={onDecrement} type="button">
          -
        </button>
      </div>
    </div>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
