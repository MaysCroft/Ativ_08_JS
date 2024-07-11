// Atividade 08 Exercício 02

const ler = require('readline-sync');

let analise = (texto) => texto.length;

let texto = ler.question("- Digite um Texto: ");

console.log(`- O Texto digitado tem ${analise(texto)} caracteres (contando com espaços).`);