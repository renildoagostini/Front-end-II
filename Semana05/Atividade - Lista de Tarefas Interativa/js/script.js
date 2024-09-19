var btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
    const inTarefa = document.getElementById('inTarefa');
    const tarefa = inTarefa.value;

    if (tarefa === "") {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    // Criar o item de tarefa (li)
    const outraTarefa = document.createElement('li');
    outraTarefa.textContent = tarefa;
    outraTarefa.classList.add('tarefa');

    // Criar botão "Concluir"
    const botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = 'Concluir';
    botaoConcluir.classList.add('btn', 'btn-success', 'btn-sm', 'mx-2');
    botaoConcluir.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede a seleção da tarefa
        confirm('Tarefa concluída');       
        outraTarefa.classList.toggle('concluida');
    });

    // Criar botão "Excluir"
    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.classList.add('btn', 'btn-danger', 'btn-sm');
    botaoExcluir.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita conflito com seleção de tarefa
        if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
            outraTarefa.remove(); // Remove apenas a tarefa atual
        }
        inTarefa.focus();
    });

    // Adicionar os botões à tarefa    
    outraTarefa.appendChild(botaoExcluir);
    outraTarefa.appendChild(botaoConcluir);

    // Adicionar a tarefa à lista de tarefas
    document.getElementById('outTarefa').appendChild(outraTarefa);

    // Limpar o campo de entrada
    inTarefa.value = '';
    inTarefa.focus();
}


