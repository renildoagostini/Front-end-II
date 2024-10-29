//Declara o vetor global
let produtos = [];

//Cria referência ao btAdicionar e associa a função ao evento click deste botão
let btAdicionar = document.getElementById("btAdicionar").addEventListener("click", adicionarProdutos);


function adicionarProdutos(){
    //Cria referência aos elementos contendo todos os dados de entrada
    let inProduto = document.getElementById("inProduto");
    let inDescricao = document.getElementById("inDescricao");
    let inPreco = document.getElementById("inPreco");

    //obtém conteúdo dos campos
    var produto = inProduto.value;
    var descricao = inDescricao.value;
    var preco = Number(inPreco.value);

    //Verifica se os campos foram digitados corretamente
    if(produto == "" || descricao == "" || preco == 0 || isNaN(preco)){
        alert("Informe corretamente os dados");
        inProduto.focus();
        return
    }

    //Adiciona dados ao vetor de objetos
    produtos.push({produto: produto, descricao, preco})

    //Limpa os campos após clicar no botão adicionar
    inProduto.value = "";
    inDescricao.value = "";
    inPreco.value = "";
    inProduto.focus();
    
    listarProdutos();

}

 //Chama a função listarProdutos();
 function listarProdutos(){
    //Verifica se o vetor está vazio
    if(produtos.length == 0){
        alert("Não há produtos a serem exibidos");
    }

    //Para concatenar lista de produtos
    var lista = "";

    //Percorre os elementos do vetor
    for (var i = 0; i < produtos.length; i++){
        //Adiciona a lista, cada objeto do vetor
                lista += `<span style="color: blue;">Nome do Produto:</span> ${produtos[i].produto} <span style="color: blue;">Descrição:</span> ${produtos[i].descricao} <span style="color: blue;"> Preço: </span>R$ ${produtos[i].preco.toFixed(2)} \n`;
        
    }

    document.getElementById("outLista").innerHTML = lista;
}