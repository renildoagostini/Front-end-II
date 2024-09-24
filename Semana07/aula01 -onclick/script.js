function saudacao(){
    alert("Oi");
}

const btMensagem = document.getElementById("btMensagem");
btMensagem.ondblclick = function(){
    saudacao();
}

const resposta = document.getElementById('resposta');
resposta.onclick = saudacao;


