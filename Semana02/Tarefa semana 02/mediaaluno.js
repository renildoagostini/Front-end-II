// cria referência aos elementos da página

var inNome = document.getElementById("inNome");
var inNota1 = document.getElementById("inNota1");
var inNota2 = document.getElementById("inNota2");
var inNota3 = document.getElementById("inNota3");
var outResultado = document.getElementById("outResultado");
var btCalcular = document.getElementById("btCalcular");

btCalcular.addEventListener("click", calcularMediaAluno);

function calcularMediaAluno(){
    
    //Obtém conteúdo dos campos de entrada

    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);
    var nota3 = Number(inNota3.value);

    //calcula a média do aluno

    var media = (nota1 + nota2 + nota3)/3;

    if(media >= 7){
        outResultado.textContent = `Parabéns ${nome} você foi aprovado com média ${media.toFixed(2)}`;       
    }else if(media < 7 && media >= 4){
        outResultado.textContent = `${nome} você ficou em recuperação com média ${media}`;       
    }else{
        outResultado.textContent = `Que pena ${nome} você ficou reprovado com média ${media}`;     
    }

    
}