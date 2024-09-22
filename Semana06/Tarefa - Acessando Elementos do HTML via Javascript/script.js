//Questão a) Seleciona o elemento com o ID 'header-nav'
document.getElementById('header-nav').style.backgroundColor = 'blue';


/*Questão b) Selecione todos os elementos que contenha a classe bg-color-dark. Posterior a isso, modifique
todos os elementos inserindo um novo texto. A descrição do texto é livre e deverá ser definida pelo
aluno.*/

let bgColorDark = document.getElementsByClassName('bg-color-dark');
for(let i = 0; i < bgColorDark.length; i++){
    bgColorDark[i].innerHTML = prompt('Digite o novo texto');
}

/*questão c) Explique com suas palavras, o quê aconteceria se você executasse o seguinte comando em javascript?*/


//let navs = document.querySelectorAll('nav');
//for(let k=0;k<navs.length;k++) {
//navs[k].innerHTML = "Novo texto";
//}

/*Se for executado o código JavaScript acima, o seguinte aconteceria:

O comando document.querySelectorAll('nav') busca todos os elementos <nav> no documento HTML e os armazena na variável navs, que se torna uma NodeList (uma lista de nós).

O loop for itera sobre cada elemento na NodeList. A variável k é usada como índice para acessar cada elemento.

Alterar o Conteúdo: Dentro do loop, navs[k].innerHTML = "Novo texto"; substitui o conteúdo HTML de cada elemento <nav> por "Novo texto". Isso significa que, independentemente do que estava anteriormente dentro de cada <nav>, ele será completamente substituído por esse novo texto.

Resultado:
Ao final da execução do código, todos os elementos <nav> no documento teriam o mesmo conteúdo: "Novo texto". Isso removeria qualquer outro texto ou elementos que estavam anteriormente dentro dos <nav>, resultando em uma interface visual alterada onde esses elementos de navegação seriam uniformemente modificados.

No caso desse exercício que fiz junto com as letras anteriores, no final apareceria uma interface  conforme telas enviadas na pasta imagem e arquivo PDF em anexo*/


