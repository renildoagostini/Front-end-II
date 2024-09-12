let nomes = ["estevao","ana","esther"];

function alerta(msg){
    console.log(msg);
   return msg();
}

function executarSirene(){
    console.log('Executando a sirene.........buuuuuuuu');
}

function executarSireneSilenciosa(){
    console.log('Executando a sirene......');
}

//alerta(executarSirene);
alerta(executarSireneSilenciosa);

function soma(n1){
    return function(n2){
        return n1 + n2;
    }
}

let s = soma(2);
//console.log(s);
//let n = s(3);
//console.log(s(3));

let n = soma(2)(5);
console.log(n);

function multiplicador(n1){
    //n1*n2*n2
    return function(n2){
        return function(n3){
            return n1 * n2 * n3;
        }
    }
}

let m = multiplicador(2)(5)(6);
console.log(m);

function potencia(n1){
    return function(n2){
        return function(n3){
           return n1 * n2 * n3;
        }
    }
}

let p = potencia(3)(3)(3);
console.log(p);

