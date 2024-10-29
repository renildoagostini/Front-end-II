const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");


const diminuir = () => {
    const valor = document.getElementById('resultado');
    const inputNumero = document.getElementById('numero');

    const numero = parseInt(valor.innerText);
    const inputInteiro = parseInt(inputNumero.value);

    const valorFinal = numero - inputInteiro;

    imprimirNoHTML(valorFinal)
}


btnMais.addEventListener('click', adicionar);
btnMenos.addEventListener('click', diminuir);

function adicionar(){
    const valor = document.getElementById('resultado');
    const inputNumero = document.getElementById('numero');

    const numero = parseInt(valor.innerText);
    const inputInteiro = parseInt(inputNumero.value);

    const valorFinal = numero + inputInteiro;

    imprimirNoHTML(valorFinal)
}



const imprimirNoHTML = (texto) => {
    const resultado = document.getElementById("resultado");
    resultado.innerText = texto;
}

/*function imprimirNoHTML(texto){
    const resultado = document.getElementById("resultado");
    resultado.innerText = texto;
}*/