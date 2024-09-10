// Função de seta para alternar a visibilidade de um elemento
const alternarVisibilidade = () => {
    const elemento = document.getElementById('elementoParaAlternar');

    // Verificar a visibilidade atual e alternar
    if (elemento.style.display === 'none') {
        elemento.style.display = 'block'; // Exibir o elemento
    } else {
        elemento.style.display = 'none';  // Ocultar o elemento
    }
};

// Adicionar o evento de clique ao botão
document.getElementById('botaoAlternar').addEventListener('click', alternarVisibilidade);
