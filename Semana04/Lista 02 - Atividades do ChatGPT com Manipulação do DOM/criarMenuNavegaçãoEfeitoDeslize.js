// Função de seta para alternar o menu de navegação
const alternarMenu = () => {
    const menu = document.getElementById('menu');
    
    // Alterna a classe 'mostrar' para abrir ou fechar o menu
    menu.classList.toggle('mostrar');
};

// Adiciona o evento de clique ao botão
document.getElementById('botaoMenu').addEventListener('click', alternarMenu);
