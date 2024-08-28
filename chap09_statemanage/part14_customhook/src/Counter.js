import { useState } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return { count, increment };
}

function Counter() {
  const { count, increment } = useCounter();
  return (
    <div>
      <p>You've clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}

export default Counter;