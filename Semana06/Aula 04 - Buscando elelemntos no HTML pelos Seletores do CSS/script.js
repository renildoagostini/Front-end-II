document.querySelector('#conteudo');
document.querySelector('.conteudo');
document.querySelectorAll(".conteudo");


let aluno = document.querySelectorAll('li.aluno');
for(let i = 0; i < aluno.length; i++){
    aluno[i].innerHTML = prompt('aluno');
}
