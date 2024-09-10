const fatorial = (num) => {
    if (num < 0) {
        return "Fatorial não é definido para números negativos.";
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= num; i++) {
            resultado *= i;
        }
        return resultado;
    }
};

console.log(fatorial(5)); // Saída: 120
console.log(fatorial(0)); // Saída: 1
console.log(fatorial(-3)); // Saída: Fatorial não é definido para números negativos.

