import './App.css';
import MyComponent from './components/MyComponent';
import MyComponent2 from './components/MyComponent2';
import MyComponent3 from './components/MyComponent3';
import Football from './components/Football';
import Sales from './components/Sales';
import UsingAir from './components/UsingAir';
import Garage from './components/Garage';
import Boarding from './components/Boarding';
import Goal from './components/Goal';
import Passing from './components/Passing';
import Buy from './components/Buy';
import MyForm from './components/MyForm';

function App() {
  const user = {
    name: "John Doe",
    birthdate: "1990-01-01",
    age: 30
  };
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <div className="App">
        <Garage />
        <UsingAir />
        <Sales />
        <myCom name="kim" />
        <myCom2 name="park" />
        <MyComponent name="John Doe" age={30} email="john@example.com" address="123 Main St" />
        <MyComponent2 name="John Doe" age={30} email="john@example.com" address="123 Main St" />
        <MyComponent3 user={user} />
        <Football />
        <Goal isGoal={false} />
        <Boarding cars={cars} />
        <Passing isPass={false} />
        <Buy />
        <MyForm />
    </div>
  );
}

export default App;
