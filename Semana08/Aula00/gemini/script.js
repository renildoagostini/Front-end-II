function calcularMedia() {
    // Obter os valores das notas dos inputs
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    // Calcular a média
    const media = (nota1 + nota2 + nota3) / 3;

    // Exibir o resultado
    document.getElementById('resultado').textContent = `A média é: ${media.toFixed(2)}`;
}