let pontuacaoA = 0;
let pontuacaoB = 0;

const adicionarPontos = (time) => { // utilizei Arrow function declarada 
    if (time === 'A') {
        const pontos = parseInt(document.getElementById('pontosA').value) || 0;
        pontuacaoA += pontos;
        document.getElementById('pontuacaoA').innerText = pontuacaoA;
    } else if (time === 'B') {
        const pontos = parseInt(document.getElementById('pontosB').value) || 0;
        pontuacaoB += pontos;
        document.getElementById('pontuacaoB').innerText = pontuacaoB;
    }
};

document.getElementById("btnA").addEventListener("click", () => adicionarPontos('A'));