const alternarClasses = () => {
    const elemento = document.getElementById('meuElemento');
    // Verifica se o elemento tem a classe 'classe1'
    if (elemento.classList.contains('classe1')) {
        // Remove 'classe1' e adiciona 'classe2'
        elemento.classList.remove('classe1');
        elemento.classList.add('classe2');
    } else {
        // Remove 'classe2' e adiciona 'classe1'
        elemento.classList.remove('classe2');
        elemento.classList.add('classe1');
    }
};

// Adiciona um listener para o botão que chama a função ao ser clicado
document.getElementById('alternarClasse').addEventListener('click', alternarClasses);
