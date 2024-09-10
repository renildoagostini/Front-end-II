const ocultarDepoisDeTempo = (tempo) => {
    const elementoMensagem = document.getElementById('mensagem');
    
    // Define um atraso antes de ocultar o elemento
    setTimeout(() => {
        elementoMensagem.style.display = 'none'; // Torna o elemento invisível
    }, tempo); // Tempo em milissegundos
};

// Adiciona um listener para o botão que chama a função ao ser clicado
document.getElementById('ocultarMensagem').addEventListener('click', () => ocultarDepoisDeTempo(5000)); // 5000 ms = 5 segundos

