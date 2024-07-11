// Atividade 08 Exercício 06

let funcionarios = [
    {primeNome: "Zephyr"   , ultNome: "Nightingale"},
    {primeNome: "Seraphina", ultNome: "Thunderbolt"},
    {primeNome: "Phoenix"  , ultNome: "Moonshadow"},
    {primeNome: "Aurelius" , ultNome: "Winterbourne"},
    {primeNome: "Cressida" , ultNome: "Stargazer"},
    {primeNome: "Orion"    , ultNome: "Whisperwind"},
    {primeNome: "Lysander" , ultNome: "Mistral"},
    {primeNome: "Calypso"  , ultNome: "Firethorn"},
    {primeNome: "Thaddeus" , ultNome: "Silverhawk"},
    {primeNome: "Andromeda", ultNome: "Wolfsbane"}
];

let cadastro = (funcionarios) => {
    let nomeCompleto = [];
    for (let i = 0; i < funcionarios.length; i++) {
        nomeCompleto.push(`${funcionarios[i].primeNome} ${funcionarios[i].ultNome}`);
    }
    return nomeCompleto;
};

let nomeCompleto = cadastro(funcionarios);

console.log("------- LISTA DE FUNCIONÁRIOS -------");
console.table(nomeCompleto);
console.log("-------------------------------------");