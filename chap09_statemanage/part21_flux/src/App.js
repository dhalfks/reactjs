import React, { useEffect, useState } from 'react';
import Store from './Store';
import { incrementCounter } from './Action';

function App() {
  const [count, setCount] = useState(Store.getState().count);

  useEffect(() => {
    Store.subscribe(() => {
      setCount(Store.getState().count);
    });
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => Store.dispatch(incrementCounter())}>
        Increment
      </button>
    </div>
  );
}

export default App;