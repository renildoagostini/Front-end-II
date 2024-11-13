let nome = "Renildo";
let idade = 49;
const status = true;

//Objeto com várias propriedades
let carro = {
    marca: "Toyota",
    modelo: "Etios",
    ano: 2019    
};

//Array de string
let cores = ["vermelho ", "branco ", "azul "];

//modificando valores
carro.ligado = true;
cores.push("amarelo ");
carro.vidro = "elétrico";



console.log(`O ${nome} tem ${idade} e dirige um ${carro.marca} ${carro.modelo} ano ${carro.ano} ${cores[1]} ${carro.vidro}`);
console.log(`Cores disponíveis: ${cores.join("")}`);

