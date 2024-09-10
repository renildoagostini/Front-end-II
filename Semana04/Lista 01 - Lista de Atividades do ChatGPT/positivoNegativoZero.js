const verificarNumero = (num) => {
    if (num > 0) {
        return `O número ${num} é positivo`;
    } else if (num < 0) {
        return `O número ${num} é negativo`;
    } else {
        return `O número ${num} é nulo`;
    }
};

console.log(verificarNumero(10));  // Saída: positivo
console.log(verificarNumero(-5));  // Saída: negativo
console.log(verificarNumero(0));   // Saída: zero
