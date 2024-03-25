const alunos = [
    { nome: 'Roniel', nota: 7 },
    { nome: 'Raolita', nota: 5 },
    { nome: 'Genebildo', nota: 8 },
    { nome: 'Nei', nota: 6 },
    { nome: 'Cleiton', nota: 4 }
];

function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovadosArray = alunosAprovados(alunos);

console.log("Alunos aprovados:");
console.log(alunosAprovadosArray);
