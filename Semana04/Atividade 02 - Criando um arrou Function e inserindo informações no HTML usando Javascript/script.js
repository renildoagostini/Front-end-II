// Função de seta para imprimir o resultado no elemento <h1> com id 'respostas'
const imprimirNoHTML = (resultado) => {
    document.getElementById('respostas').textContent = `Resultado: ${resultado}`;
};

// Função de seta para calcular a média
const calcularMedia = (nota1, nota2, nota3, tipo) => {
    let media;

    // Verificar o tipo de média a ser calculada
    switch (tipo.toUpperCase()) {
        case 'A':
            // Média Aritmética
            media = (nota1 + nota2 + nota3) / 3;
            break;
        case 'P':
            // Média Ponderada (pesos: 5, 3, 2)
            media = ((nota1 * 5) + (nota2 * 3) + (nota3 * 2)) / 10;
            break;
        case 'H':
            // Média Harmônica
            media = 3 / ((1 / nota1) + (1 / nota2) + (1 / nota3));
            break;
        default:
            media = 'Tipo de média inválido.';
    }

    // Exibir o resultado no HTML
    imprimirNoHTML(media);
};

// Função para obter os valores do formulário
const obterValores = () => {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const tipo = document.getElementById('tipo').value;

    // Verifica se as notas são válidas e define uma mensagem com base nisso
    const mensagem = (isNaN(nota1) || isNaN(nota2) || isNaN(nota3))
        ? 'Por favor, insira todas as notas corretamente. (Clique no botão Limpar Formulário para reiniciar a operação).'
        : ''; // Caso contrário, mensagem vazia

    // Se houver uma mensagem, exibe no HTML e retorna
    if (mensagem) {
        imprimirNoHTML(mensagem);
        return;
    }

    // Chama a função para calcular a média se as notas forem válidas
    calcularMedia(nota1, nota2, nota3, tipo);
};

// Função para limpar o formulário
const limparFormulario = () => {
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
    document.getElementById('tipo').value = ''; // Define o valor padrão para uma opção não selecionada
    document.getElementById('respostas').textContent = 'Resultado:';
    document.getElementById('nota1').focus();
};

