const alterarCorFundo = () => {
    document.getElementById('elemento').style.backgroundColor = 'blue';
    document.getElementById('cor').style.backgroundColor = 'yellow';

};

// Chama a função quando o conteúdo da página estiver carregado
document.addEventListener('DOMContentLoaded', alterarCorFundo);

  