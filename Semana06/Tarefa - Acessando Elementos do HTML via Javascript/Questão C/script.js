let navs = document.querySelectorAll('nav');
for(let k=0;k<navs.length;k++) {
navs[k].innerHTML = "O comando document.querySelectorAll('nav') busca todos os elementos <nav> no documento HTML e os armazena na variável navs, que se torna uma NodeList (uma lista de nós). O loop for itera sobre cada elemento na NodeList. A variável k é usada como índice para acessar cada elemento. Alterar o Conteúdo: Dentro do loop, navs[k].innerHTML = 'Novo texto' substitui o conteúdo HTML de cada elemento <nav> por 'Novo texto'. Isso significa que, independentemente do que estava anteriormente dentro de cada <nav>, ele será completamente substituído por esse novo texto.";
}








