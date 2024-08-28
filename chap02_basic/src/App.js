import './App.css';
import Contents from "./components/Contents"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Basic
        </a>
      </header>
      <Contents />
      <footer className="App-footer">
        <p className="">ⓒ 2024. Sunglee0517. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
