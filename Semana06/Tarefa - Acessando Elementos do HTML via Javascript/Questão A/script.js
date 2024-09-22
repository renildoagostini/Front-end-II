// Seleciona o botão pelo ID
const btEscolherCor = document.getElementById('btEscolherCor');

// Adiciona o evento de clique ao botão
btEscolherCor.addEventListener('click', mudarCor);
    
    
    function mudarCor() {
    // Pede ao usuário para digitar uma cor ou código hexadecimal
    const corEscolhida = prompt('Digite a cor ou o código hexadecimal:');
    
    // Aplica a cor escolhida ao background pelo ID solicitado no exercício
    document.getElementById('header-nav').style.backgroundColor = corEscolhida;
};



