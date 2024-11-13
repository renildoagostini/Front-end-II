//Em JavaScript, as funções podem ser passadas como argumentos para outras funções.

function aplicarOperacao(a, b, operacao){
    return operacao(a, b);
}


const somar = (a, b) =>{
    return a + b;
}

console.log(aplicarOperacao(5, 5, somar));