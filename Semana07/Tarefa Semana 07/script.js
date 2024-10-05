function mediaAluno() {
    let nomeAluno = document.getElementById('inNomeAluno').value;
    let primeiraNota = document.getElementById('inPrimeiraNota').value;
    let segundaNota = document.getElementById('inSegundaNota').value;
    let resultado = document.getElementById('outResultado');

    // Verifica se o nome do aluno foi informado
    if (nomeAluno === "") {
        alert("Informe o nome do aluno");
        document.getElementById('inNomeAluno').focus();
        return;
    }

    // Verifica se a primeira nota foi informada e se é um número válido
    if (primeiraNota === "" || isNaN(primeiraNota)) {
        alert("Informe a primeira nota corretamente");
        document.getElementById('inPrimeiraNota').focus();
        return;
    }

    // Verifica se a segunda nota foi informada e se é um número válido
    if (segundaNota === "" || isNaN(segundaNota)) {
        alert("Informe a segunda nota corretamente");
        document.getElementById('inSegundaNota').focus();
        return;
    }

    // Converte as notas para números e calcula a média
    let media = (Number(primeiraNota) + Number(segundaNota)) / 2;

    // Verifica a média e define o resultado
    if (media >= 60) {
        resultado.textContent = `Parabéns ${nomeAluno}, você foi aprovado com média ${media}`;
    } else {
        resultado.textContent = `Que pena ${nomeAluno}, você foi reprovado nessa matéria. Sua média: ${media}`;
    }

    limparCampos();
}

function limparCampos() {
    // Limpa os valores dos campos de entrada
    document.getElementById('inNomeAluno').value = "";
    document.getElementById('inPrimeiraNota').value = "";
    document.getElementById('inSegundaNota').value = "";   
    document.getElementById('inNomeAluno').focus();
}

let botao = document.getElementById('btCalcularMedia');
botao.addEventListener("click", mediaAluno);





