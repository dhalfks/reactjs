import './App.css';
import Car from './component/Car';
import Car2 from './component/Car2';
import Air from './component/Air';
import MyComponent from './component/MyComponent';
import MyComponent2 from './component/MyComponent2';
import MyComponent3 from './component/MyComponent3';
import Greeting from './component/Greeting';
import Counter from './component/Counter';

function App() {
  return (
    <div className="App">
      <Car />
      <Car2 />
      <Air />
      <MyComponent />
      <MyComponent2 />
      <MyComponent3 />
      <Greeting name="Alice" />
      <Counter />
    </div>
  );
}

export default App;
