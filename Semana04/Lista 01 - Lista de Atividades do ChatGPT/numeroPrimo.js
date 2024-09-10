const ePrimo = (num) => {
    if (num <= 1) {
        return `O número ${num} não é primo`;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return `O número ${num} não é primo`;
        }
    }
    return `O número ${num} é primo`;;
};

console.log(ePrimo(2));  // Saída: true (é primo)
console.log(ePrimo(4));  // Saída: false (não é primo)
console.log(ePrimo(17)); // Saída: true (é primo)
