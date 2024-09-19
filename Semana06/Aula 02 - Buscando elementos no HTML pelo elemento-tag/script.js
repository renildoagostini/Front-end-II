document.getElementsByTagName('p');
let vetor = document.getElementsByTagName('p');
vetor[0].innerHTML = "Novo texto";

let main = document.getElementById('principal');
let p =  main.getElementsByTagName('p');
for(let i = 0; i < p.length; i++){
    p[i].innerHTML = prompt('Nome');
}


let ul = document.getElementById('lista');
let li = ul.getElementsByTagName('li');
for(let i = 0; i < li.length; i++){
    li[i].innerHTML = prompt('aluno');
}




