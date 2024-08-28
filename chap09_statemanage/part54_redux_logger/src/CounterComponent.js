import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './actions';

const CounterComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default CounterComponent;