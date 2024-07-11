// Atividade 08 Exercício 03

let precos = [
    {nome: "Arroz"   , preco: 10.5},
    {nome: "Feijão"  , preco: 8.75},
    {nome: "Óleo"    , preco: 5.99},
    {nome: "Leite"   , preco: 3.49},
    {nome: "Café"    , preco: 12.0},
    {nome: "Açúcar"  , preco: 4.25},
    {nome: "Macarrão", preco: 2.99},
    {nome: "Carne"   , preco: 15.75},
    {nome: "Frango"  , preco: 9.99},
    {nome: "Sabonete", preco: 1.5}
];

let ajuste = 1.1;

let mult = (preco, ajuste) => {
    return (preco * ajuste).toFixed(2);
};

for (let i = 0; i < precos.length; i++) {
    precos[i].preco = mult(precos[i].preco, ajuste);
}

console.log("---- Atenção aos Novos Preços ----");
console.table(precos);
console.log("----------------------------------");