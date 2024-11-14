// Função que exibe a mensagem
exibirMensagem = () =>{
    // Seleciona o parágrafo e define o texto
    document.getElementById("mensagem").textContent = "Você clicou no botão!";
}
// Adiciona o evento de clique ao botão
document.getElementById("btn").onclick = exibirMensagem;