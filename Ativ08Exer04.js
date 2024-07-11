// Atividade 08 Exercício 04

const ler = require('readline-sync');

let palindromo = palin => {
    return palin.split('').reverse().join('');
};

console.log("------------------------------------");
console.log("- O que são Palavras Palíndromas?");
console.log("------------------------------------");

console.log("----------------------------------------------------");
console.log("- São aquelas que se leem da mesma forma tanto da \n  esquerda para a direita quanto da direita para a \n  esquerda.");
console.log("------------------------------------------------------");
console.log("- Aqui estão alguns exemplos de palavras Palíndromas:");
console.log(`- ${palindromo("ARARA")}`);
console.log(`- ${palindromo("REVIVER")}`);
console.log(`- ${palindromo("RADAR")}`);
console.log(`- ${palindromo("ASA")}`);
console.log(`- ${palindromo("OVO")}`);
console.log("------------------------------------------------------");

console.log("------------------------------------------------------");
console.log("- Para o desenvolvimento do Jogo de Palavras, \n  será necessário alguns testes.");
console.log("------------------------------------------------------");

function teste() {
    
    let num = ler.questionFloat("- Quantas palavras deseja processar? ");

    for (let i = 0; i < num; i++) {

        let palavra = ler.question("- Digite uma Palavra: ").toUpperCase();

        let invert_palavra = palavra.split('').reverse().join('');

        if (invert_palavra == palavra) {
            console.log(`- A Palavra - ${palavra} - É um Palíndromo!`);
        } else {
            console.log(`- A Palavra - ${palavra} - NÃO é um Palíndromo!`);
        }
    }
}

teste();