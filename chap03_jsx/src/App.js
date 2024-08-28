import './App.css';

function App() {
  const myElement1 = <h1>React is {5 + 5} times better with JSX</h1>;
  const myElement2 = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
  );
  const myElement3 = (
    <div>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </div>
  );
  const myElement4 = (
    <>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </>
  );
  const myElement5 = <input type="text" />;
  const myElement6 = <h1 className="myclass">Hello World</h1>;

  const x = 5;
  let text = "Goodbye";
  if (x < 10) {
      text = "Hello";
  }
  const myElement7 = <h1>{text}</h1>;

  const myElement8 = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

  return (
    <div className="App">
      <header className="App-header">
        <div>{myElement1}</div>
        <div>{myElement2}</div>
        <div>{myElement3}</div>
        <div>{myElement4}</div>
        <div>{myElement5}</div>
        <div>{myElement6}</div>
        <div>{myElement7}</div>
        <div>{myElement8}</div>
      </header>
    </div>
  );
}

export default App;
