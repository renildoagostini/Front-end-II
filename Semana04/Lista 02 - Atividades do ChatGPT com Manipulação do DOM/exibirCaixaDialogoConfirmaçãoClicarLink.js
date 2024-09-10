// Função de seta para exibir uma caixa de diálogo de confirmação
const confirmarClique = (event) => {
    // Exibir a caixa de diálogo de confirmação
    const confirmacao = confirm('Você tem certeza que deseja continuar?');

    // Se o usuário clicar em "Cancelar", prevenir a navegação
    if (!confirmacao) {
        event.preventDefault();
    }
};

// Adicionar o evento de clique ao link
document.getElementById('meuLink').addEventListener('click', confirmarClique);
