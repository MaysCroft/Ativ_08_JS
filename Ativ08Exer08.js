// Atividade 08 Exercício 08

let aprovados = (alunos) => {

    let alunosAprovados = [];

    for (let aluno of alunos) {
        if (aluno.nota >= 60) {
            alunosAprovados.push((aluno.nome.toUpperCase()), aluno.nota);
        }
    }
    return alunosAprovados;
};

let alunos = [
    {nome: 'Thutmose'  , nota: 85},
    {nome: 'Xanthe'    , nota: 50},
    {nome: 'Hatshepsut', nota: 70},
    {nome: 'Akhenaton' , nota: 42},
    {nome: 'Nefertiti' , nota: 95},
    {nome: 'Seti'      , nota: 60},
    {nome: 'Cleópatra' , nota: 38},
    {nome: 'Ramsés '   , nota: 78},
    {nome: 'Seneb'     , nota: 55},
    {nome: 'Ankhesena' , nota: 83}
];

const alunosAprovados = aprovados(alunos);
console.log("--- LISTA DE APROVADOS ---");
console.table(alunosAprovados);
console.log("--------------------------");