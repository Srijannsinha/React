import logo from './logo.svg';
import './App.css';

function App() {
  const name="Srijan";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to see what I changed.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a>
        <p>{name}</p>
      </a>
      </header>
      
    </div>
  );
}

export default App;
