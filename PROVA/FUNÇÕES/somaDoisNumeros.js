// Captura o botão
let botao = document.getElementById("btnSomar");

// Adiciona o evento de clique no botão
botao.addEventListener("click", function soma(a, b) {
    // Pega os valores atualizados dos campos de entrada e converte para números
    let numero1 = parseFloat(document.getElementById("inNumero1").value);
    let numero2 = parseFloat(document.getElementById("inNumero2").value);

    // Calcula a soma
    let resultado = soma(numero1, numero2);

    // Exibe o resultado no elemento outResultado
    document.getElementById("outResultado").innerText = "O resultado é: " + resultado;
});

// Função de soma
function soma(a, b) {
    return a + b;
}

//let a = 3;
//let b = 9;

//console.log(soma(2, 7));

//console.log("A soma do número é: " + soma(2, 3));

//console.log(`A soma dos números é: ${soma(a, b)}`);

//console.log(`a soma do número ${a} com o número ${b} é: ${soma(a, b)}`);