

let consultas = [
    {
        nome : "Como aprender React, Javascript, HTML e CSS",
        horario: '2023/4/5 21h45min'
    },
    {
        nome : "Como aprender Javascript avançado",
        horario: '2023/4/5 21h48min'
    }
]


const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    console.log(evento);
    //console.log(evento.target.elements[0].value)
    const nome = evento.target.elements[0].value
    const data = new Date()
    const horario = `${data.getFullYear()}/${data.getMonth()}/${data.getDay()} ${data.getHours()}h${data.getMinutes()}min`

    const consulta = {nome, horario}
    console.log(consulta)

    console.log(nome)
    console.log(horario)
    
    atualizar(consulta)
    evento.target.elements[0].value = ''

    //consultas.push(consulta)
    consultas = [...consultas, consulta]
    console.log(consultas)
})

function atualizar(consulta) {
    const res = document.getElementById('respostas');
    res.innerHTML += `<div class="consulta">
                        ${consulta.nome}- realizada às ${consulta.horario}
                    </div>`
                    
}