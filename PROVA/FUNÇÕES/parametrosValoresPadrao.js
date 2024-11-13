//É possível atribuir valores padrão aos parâmetros de uma função. Isso é útil quando não se passa um argumento para a função.

function saudacao( nome = "Visitante"){
    console.log(`Olá ${nome}!`);
}

saudacao("Renildo");

//Valor padrão: Quando não passamos argumento para nome, o valor "Visitante" é utilizado por padrão.

