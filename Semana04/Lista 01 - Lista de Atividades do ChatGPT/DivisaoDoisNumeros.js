const divisao = (num1, num2) => {
    if (num2 === 0) {
        return "Erro: Divisão por zero não é permitida.";
    }
    return `A divisão do primeiro pelo segundo número é: ${num1 / num2}`;
};

console.log(divisao(10, 2)); // Saída: A divisão do primeiro pelo segundo número é: 5
console.log(divisao(10, 0)); // Saída: Erro: Divisão por zero não é permitida.
