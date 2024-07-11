// Atividade 08 Exercício 01

let users = [
    {nome: "Alice"   , idade: 22},
    {nome: "Bruno"   , idade: 30},
    {nome: "Carolina", idade: 28},
    {nome: "Daniel"  , idade: 25},
    {nome: "Elisa"   , idade: 24},
    {nome: "Fernando", idade: 27},
    {nome: "Gabriela", idade: 26},
    {nome: "Hugo"    , idade: 29},
    {nome: "Isabela" , idade: 23},
    {nome: "Júlia"   , idade: 31}
];

let userPar = [];
let userImpar = [];

let conf = user => {
    let result = user.idade % 2 === 0 ? userPar.push(user) : userImpar.push(user);
};

users.forEach(conf);

console.log("---- Usuários com Idade Par: ---");
console.table(userPar);
console.log("--------------------------------");

console.log("---- Usuários com Idade Ímpar: ---");
console.table(userImpar);
console.log("--------------------------------");