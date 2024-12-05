
import './App.css';
import Botao from './componentes/Botao';

function App() {

  const dados = {
    nome: "Renildo",
    Valor: 100,
    condicao: false
  }
  return (
   
      <Botao nome="Front-end II" ativo= {true} data = {dados}>
        Informe algo 
      </Botao>     
  );
}

export default App;
