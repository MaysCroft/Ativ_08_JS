// Atividade 08 Exercício 07

let filtroNome = (usuarios) => {

    let nomeConvertido = [];

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].idade >= 18) {
            nomeConvertido.push(usuarios[i].nome.toUpperCase());
        }
    }
    return nomeConvertido;
};

let usuarios = [
    {nome: "Xenócrates", idade: 25},
    {nome: "Zephyr"    , idade: 20},
    {nome: "Ariadne"   , idade: 30},
    {nome: "Odysseus"  , idade: 28},
    {nome: "Eurydice"  , idade: 23},
    {nome: "Aurelius"  , idade: 26},
    {nome: "Athena"    , idade: 27},
    {nome: "Calliope"  , idade: 21},
    {nome: "Triton"    , idade: 16},
    {nome: "Pandora"   , idade: 22},
    {nome: "Persephone", idade: 17},
    {nome: "Orpheus"   , idade: 31}
];

let nomeConvertido = filtroNome(usuarios);
console.log("- USUÁRIOS MAIORES DE 18 -");
console.table(nomeConvertido);
console.log("--------------------------");