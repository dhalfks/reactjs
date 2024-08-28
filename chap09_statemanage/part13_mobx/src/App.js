import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }
}

const store = new CounterStore();

const Counter = observer(() => (
  <div>
    <p>You've clicked {store.count} times</p>
    <button onClick={() => store.increment()}>Click me</button>
  </div>
));

function App() {
  return <Counter />;
}

export default App;