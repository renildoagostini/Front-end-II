// Função de seta para adicionar um item à lista ao pressionar Enter
const adicionarItem = (event) => {
    // Verificar se a tecla pressionada foi o Enter (código 13)
    if (event.key === 'Enter') {
        const campoEntrada = document.getElementById('campoEntrada');
        const lista = document.getElementById('minhaLista');

        // Apenas adicionar o item se o campo não estiver vazio
        if (campoEntrada.value.trim() !== '') {
            // Criar um novo item de lista (li)
            const novoItem = document.createElement('li');
            novoItem.textContent = campoEntrada.value;

            // Adicionar o novo item à lista
            lista.appendChild(novoItem);

            // Limpar o campo de entrada
            campoEntrada.value = '';
        }
    }
};

// Adicionar o evento 'keydown' ao campo de entrada
document.getElementById('campoEntrada').addEventListener('keydown', adicionarItem);
