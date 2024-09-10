const alternarMensagem = () => {
    const elementoMensagem = document.getElementById('mensagem');
    const botao = document.getElementById('alternarMensagem');

    if (elementoMensagem.style.display === 'none') {
        elementoMensagem.style.display = 'block'; // Torna o elemento visível
        botao.textContent = 'Ocultar Mensagem'; // Atualiza o texto do botão
    } else {
        elementoMensagem.style.display = 'none'; // Torna o elemento invisível
        botao.textContent = 'Mostrar Mensagem'; // Atualiza o texto do botão
    }
};

// Adiciona um listener para o botão que chama a função ao ser clicado
document.getElementById('alternarMensagem').addEventListener('click', alternarMensagem);

