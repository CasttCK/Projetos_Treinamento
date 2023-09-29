const alunos = [];

for (var i = 0; i < 50; i++){
    alunos.push({
        nome: `Aluno ${i + 1}`,
        nota1: parseFloat(Math.random() * (10 - 5) + 5).toFixed(2),
        nota2: parseFloat(Math.random() * (10 - 5) + 5).toFixed(2),
        nota3: parseFloat(Math.random() * (10 - 5) + 5).toFixed(2),
        nota4: parseFloat(Math.random() * (10 - 5) + 5).toFixed(2)
    })
}

alunos.map(aluno => {
    console.log(`{nome:'${aluno.nome}', nota1: ${aluno.nota1}, nota2: ${aluno.nota2}, nota3: ${aluno.nota3}, nota4: ${aluno.nota4}},`)
})
