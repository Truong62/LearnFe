import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './reducers/counterSlice';

function App() {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
