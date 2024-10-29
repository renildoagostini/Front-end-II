/*    
var consultas = [
{
        nome: 'Como estudar front-end II',
        horario: '2023/05/24 14h35min'
    },
    {
        nome: 'Como buscar um estágio',
        horario: '2023/05/24 14h38min'
    },

]
*/

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(evento) {    
    evento.preventDefault();

    //console.log(evento.target)
    //console.log(evento.target.elements[0].value)
    const data = new Date();
    const nome = evento.target.elements[0].value
    const horario = data.getFullYear() + '/05/24 '+ data.getHours() + 'h'+data.getMinutes()+'min';
    
    /*const consulta = `<div class="consulta">
                ${nome} - realizada às ${horario}
            </div>`
            */

    const consulta = {nome, horario}

    /*
    console.log(horario)
    const nova = {nome, horario}
    console.log(nova)    
    consultas = [...consultas, nova]
    */
    atualiza(consulta)
    evento.target.elements[0].value = "";
});


const atualiza = (consulta) => {
    const respostas = document.getElementById('respostas');
      //  respostas.innerHTML += consulta;
      respostas.innerHTML += `<div class="consulta">
                ${consulta.nome} - realizada às ${consulta.horario}
            </div>`
}

/*
const atualizaTudo = () => {    

    for(let k=0; k<consultas.length; k++) {
        const respostas = document.getElementById('respostas');
        respostas.innerHTML += `<div class="consulta">
            ${consultas[k].nome} - realizada às ${consultas[k].horario}
            </div>`
    }

}
*/




/*
function submeter(e) {
    console.log(e)
    e.preventDefault();
}*/