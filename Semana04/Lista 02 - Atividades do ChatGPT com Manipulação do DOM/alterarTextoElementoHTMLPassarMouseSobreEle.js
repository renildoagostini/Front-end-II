const elementoTexto = document.getElementById('texto');

// Armazena o texto original
const textoOriginal = elementoTexto.textContent;

// Função para alterar o texto quando o mouse passa sobre o elemento
const alterarTexto = () => {
    elementoTexto.textContent = 'Texto alterado ao passar o mouse!';
};

// Função para restaurar o texto original quando o mouse sai do elemento
const restaurarTexto = () => {
    elementoTexto.textContent = textoOriginal;
};

// Adiciona listeners para os eventos mouseover e mouseout
elementoTexto.addEventListener('mouseover', alterarTexto);
elementoTexto.addEventListener('mouseout', restaurarTexto);

