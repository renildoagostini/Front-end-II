import estilos from'./Funcionalidade.module.css';

function Funcionalidade(props) {
  console.log(props) ;
  
  if(props.data.condicao === true)
    console.log("Ativo == true novo jeito passando booleano")
    return (
      <h1 className={estilos.funcionalidade}>
        Funcionalidade {props.children}
      </h1>
    );
  }
  
  export default Funcionalidade;