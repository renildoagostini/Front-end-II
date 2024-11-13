//JavaScript permite que funções recebam um número variável de parâmetros. Isso é feito usando o rest parameter.

function somarTudo(...numeros){
    return numeros.reduce((acc, num) => acc + num, 0);
}

console.log(somarTudo(2,3, 6, 1));