import './App.css';
import Funcionalidade from './componentes/Funcionalidade';

function App() {

  const dados = {
    nome: "Renildo Ribeiro Agostini",
    Valor: 100,
    condicao: false
  }
  return (
   
      <Funcionalidade nome="Front-end II" ativo= {true} data = {dados}>
        Criando Funcionalidades
      </Funcionalidade>     
  );
}

export default App;

