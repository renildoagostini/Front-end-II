import estilos from'./Botao.module.css';

function Botao(props) {
  console.log(props) ;
  
  if(props.data.condicao === true)
    console.log("Ativo == true novo jeito passando booleano")
    return (
      <h1 className={estilos.botao}>
        Botão {props.children}
      </h1>
    );
  }
  
  export default Botao;