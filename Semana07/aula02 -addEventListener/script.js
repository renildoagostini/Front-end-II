function saudacao(){
    console.log('Um clique no mouse');
    alert('Oi');
}

function auxiliar(){
    console.log('Clicou com o click auxiliar do mourse');
}

const btMensagem = document.getElementById("btMensagem");
btMensagem.ondblclick = function(){
    saudacao();
}

const resposta = document.getElementById('resposta');
resposta.addEventListener("auxclick", auxiliar);


resposta.addEventListener('click', function(){
    saudacao();
})
