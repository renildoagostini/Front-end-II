const calcularMedia = (numeros) => {
    if (numeros.length === 0) {
        return "A lista está vazia.";
    }
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
};


console.log(calcularMedia([2, 4, 6, 8, 10])); // Saída: 6
console.log(calcularMedia([1, 3, 5]));        // Saída: 3
console.log(calcularMedia([]));               // Saída: A lista está vazia.
