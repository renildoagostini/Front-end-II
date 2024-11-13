//Uma função pode chamar a si mesma, o que é conhecido como recursão. Isso é útil para resolver problemas repetitivos, como a pesquisa em estruturas de dados ou o cálculo de fatorial.

const fatorial = (n) =>{
    if(n == 1 || n == 0){
        return 1;  //caso base
    }else if(n < 0) {
        return "Não existe fatorial de números negativos";
    }      
    return n * fatorial(n -1); //chamada recursiva
}


console.log(fatorial(4));