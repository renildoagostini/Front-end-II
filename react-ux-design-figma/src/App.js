import logo from './logo.svg';
import './App.css';
import Botao from './componentes/Botao';

function App() {
  return (
    <div className="App">
      <Botao />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite <code>src/App.js</code> e salve para alteração.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendendo React
        </a>
      </header>

      
    </div>
  );
}

export default App;
