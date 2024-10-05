function compararPessoas(){
    
        let inIdadeEstevao = document.getElementById('inIdadeEstevao').value;
        let inIdadeRenildo = document.getElementById('inIdadeRenildo').value;
        let outResposta = document.getElementById('outResposta');
        
        inIdadeEstevao = parseInt(inIdadeEstevao);
        inIdadeRenildo = parseInt(inIdadeRenildo);
        
        /*console.log(inIdadeEstevao);
        console.log( typeof inIdadeEstevao);
        console.log(inIdadeRenildo);
        console.log(typeof inIdadeRenildo);*/
        
        if(inIdadeEstevao > inIdadeRenildo){
            outResposta.innerHTML = 'Renildo é o mais novo';
        }else{
            outResposta.textContent = 'Estevão é o mais novo';
        }
}

let btBotao = document.getElementById("btBotao");
btBotao.addEventListener('click', compararPessoas);