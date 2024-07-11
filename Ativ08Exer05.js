// Atividade 08 Exercício 05

const ler = require('readline-sync');

let pesquisa = (palavras, palavraFoco) => {

    let contador = 0;

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i] === palavraFoco) {
            contador++;
        }
    }

    return contador;
};

let frase = ler.question('- Digite uma Frase (s/ ponto e s/ virgula): ');
let palavras = frase.split(' ');

let palavraFoco = ler.question('- Pesquisar Palavra na Frase digitada: ');

let pesq = pesquisa(palavras, palavraFoco);
console.log(`- A palavra - ${palavraFoco} - aparece ${pesq} vezes na frase.`);