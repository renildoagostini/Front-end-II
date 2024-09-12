/*function alerta(msg){    
    msg = msg + " fcn()";
    console.log(msg);
    }*/

    let imprimirNoHTML = (texto = 'Não foi enviado') =>{
        let h6 = document.getElementById('resposta');
        h6.innerHTML = texto;
    }

    //imprimirNoHTML('Oi Renildo Ribeiro Agostini');

    let alerta = (msg) => {
        msg = " alerta() -> " + msg;

        let criaBomDia = () => {
            return 'Bom dia';
        }
        console.log(criaBomDia() + msg);
        imprimirNoHTML(criaBomDia() + msg);
    };

    let somar = (n1, n2) => {
        return n1 + n2;
    }

    let duplicar = (n1) => {
        return 2 * n1;
    }
    

alerta('Renildo Ribiero Agostini');
alerta(somar(2,3));
alerta(duplicar(somar(2, 3)));