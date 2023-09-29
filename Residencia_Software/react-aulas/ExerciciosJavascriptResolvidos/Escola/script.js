const alunos = [
  { nome: "Aluno 1", nota1: 9.18, nota2: 9.3, nota3: 7.95, nota4: 7.91 },
  { nome: "Aluno 2", nota1: 8.4, nota2: 7.01, nota3: 9.49, nota4: 5.12 },
  { nome: "Aluno 3", nota1: 8.06, nota2: 7.9, nota3: 6.66, nota4: 6.71 },
  { nome: "Aluno 4", nota1: 6.89, nota2: 5.99, nota3: 9.86, nota4: 8.47 },
  { nome: "Aluno 5", nota1: 7.1, nota2: 9.31, nota3: 5.04, nota4: 8.76 },
  { nome: "Aluno 6", nota1: 5.74, nota2: 5.98, nota3: 9.43, nota4: 8.78 },
  { nome: "Aluno 7", nota1: 7.92, nota2: 9.92, nota3: 9.32, nota4: 9.13 },
  { nome: "Aluno 8", nota1: 8.37, nota2: 5.06, nota3: 9.78, nota4: 8.78 },
  { nome: "Aluno 9", nota1: 9.48, nota2: 5.66, nota3: 9.73, nota4: 7.71 },
  { nome: "Aluno 10", nota1: 7.85, nota2: 7.67, nota3: 8.3, nota4: 8.4 },
  { nome: "Aluno 11", nota1: 8.62, nota2: 6.83, nota3: 5.68, nota4: 8.67 },
  { nome: "Aluno 12", nota1: 8.43, nota2: 7.7, nota3: 9.54, nota4: 5.95 },
  { nome: "Aluno 13", nota1: 7.14, nota2: 9.34, nota3: 7.66, nota4: 5.35 },
  { nome: "Aluno 14", nota1: 5.84, nota2: 9.54, nota3: 7.82, nota4: 9.27 },
  { nome: "Aluno 15", nota1: 9.47, nota2: 9.87, nota3: 9.79, nota4: 7.62 },
  { nome: "Aluno 16", nota1: 8.39, nota2: 8.2, nota3: 8.9, nota4: 6.92 },
  { nome: "Aluno 17", nota1: 5.59, nota2: 5.17, nota3: 5.86, nota4: 8.69 },
  { nome: "Aluno 18", nota1: 6.95, nota2: 9.72, nota3: 6.73, nota4: 5.57 },
  { nome: "Aluno 19", nota1: 9.27, nota2: 5.67, nota3: 5.31, nota4: 7.66 },
  { nome: "Aluno 20", nota1: 9.92, nota2: 6.68, nota3: 9.94, nota4: 7.74 },
  { nome: "Aluno 21", nota1: 9.4, nota2: 5.39, nota3: 8.22, nota4: 7.63 },
  { nome: "Aluno 22", nota1: 9.04, nota2: 9.75, nota3: 8.21, nota4: 5.16 },
  { nome: "Aluno 23", nota1: 9.87, nota2: 6.34, nota3: 7.96, nota4: 9.01 },
  { nome: "Aluno 24", nota1: 8.93, nota2: 5.17, nota3: 8.73, nota4: 5.11 },
  { nome: "Aluno 25", nota1: 6.81, nota2: 6.43, nota3: 7.95, nota4: 6.84 },
  { nome: "Aluno 26", nota1: 9.96, nota2: 5.54, nota3: 5.44, nota4: 5.63 },
  { nome: "Aluno 27", nota1: 6.16, nota2: 8.51, nota3: 5.46, nota4: 9.26 },
  { nome: "Aluno 28", nota1: 6.19, nota2: 6.93, nota3: 7.33, nota4: 6.96 },
  { nome: "Aluno 29", nota1: 9.39, nota2: 8.08, nota3: 7.59, nota4: 7.12 },
  { nome: "Aluno 30", nota1: 6.43, nota2: 8.8, nota3: 6.04, nota4: 8.82 },
  { nome: "Aluno 31", nota1: 9.1, nota2: 6.04, nota3: 7.7, nota4: 6.88 },
  { nome: "Aluno 32", nota1: 5.61, nota2: 9.41, nota3: 6.58, nota4: 8.56 },
  { nome: "Aluno 33", nota1: 9.03, nota2: 7.95, nota3: 7.29, nota4: 7.51 },
  { nome: "Aluno 34", nota1: 6.94, nota2: 5.66, nota3: 9.49, nota4: 9.42 },
  { nome: "Aluno 35", nota1: 9.26, nota2: 8.35, nota3: 7.39, nota4: 6.46 },
  { nome: "Aluno 36", nota1: 5.76, nota2: 6.02, nota3: 5.98, nota4: 8.06 },
  { nome: "Aluno 37", nota1: 6.36, nota2: 9.41, nota3: 9.63, nota4: 9.91 },
  { nome: "Aluno 38", nota1: 9.94, nota2: 6.46, nota3: 8.79, nota4: 7.67 },
  { nome: "Aluno 39", nota1: 8.32, nota2: 5.54, nota3: 8.15, nota4: 8.8 },
  { nome: "Aluno 40", nota1: 6.86, nota2: 8.73, nota3: 9.99, nota4: 6.55 },
  { nome: "Aluno 41", nota1: 7.98, nota2: 6.27, nota3: 5.93, nota4: 6.7 },
  { nome: "Aluno 42", nota1: 7.44, nota2: 6.37, nota3: 5.94, nota4: 8.95 },
  { nome: "Aluno 43", nota1: 9.11, nota2: 5.74, nota3: 7.84, nota4: 7.48 },
  { nome: "Aluno 44", nota1: 5.0, nota2: 7.49, nota3: 8.25, nota4: 6.5 },
  { nome: "Aluno 45", nota1: 8.17, nota2: 8.78, nota3: 8.32, nota4: 8.81 },
  { nome: "Aluno 46", nota1: 5.44, nota2: 7.91, nota3: 9.99, nota4: 8.51 },
  { nome: "Aluno 47", nota1: 5.58, nota2: 9.13, nota3: 5.97, nota4: 7.32 },
  { nome: "Aluno 48", nota1: 9.55, nota2: 7.01, nota3: 5.4, nota4: 9.21 },
  { nome: "Aluno 49", nota1: 9.28, nota2: 9.23, nota3: 7.02, nota4: 7.52 },
  { nome: "Aluno 50", nota1: 9.03, nota2: 8.73, nota3: 9.37, nota4: 8.36 },
];

function gerarRelatorios() {
  const relatorio = obterMediaESituacaoPorAluno();
  gerarRelatorioGeral(relatorio);
  gerarRelatorioAprovados(relatorio);
  gerarRelatorioReprovados(relatorio);
}

function gerarRelatorioGeral(relatorio) {
  gerarVisualizacaoEmTela(relatorio, "Relatório Geral");
}

function gerarRelatorioAprovados(relatorio) {
  const relatorioAprovados = relatorio.filter((i) => i.situacao === "Aprovado");
  gerarVisualizacaoEmTela(relatorioAprovados, "Relatório Aprovados");
}

function gerarRelatorioReprovados(relatorio) {
  const relatorioReprovados = relatorio.filter(
    (i) => i.situacao === "Reprovado"
  );
  gerarVisualizacaoEmTela(relatorioReprovados, "Relatório Reprovados");
}

function obterMediaESituacaoPorAluno() {
  return alunos.map((aluno) => {
    let mediaFinal = parseFloat(
      ((aluno.nota1 + aluno.nota2 + aluno.nota3) / 4).toFixed(2)
    );
    let situacao = mediaFinal > 6.0 ? "Aprovado" : "Reprovado";
    return {
      ...aluno,
      mediaFinal: mediaFinal,
      situacao: situacao,
    };
  });
}

function gerarVisualizacaoEmTela(relatorio, tituloRelatorio) {
  var tabela = document.createElement("table");
  var titulo = document.createElement("caption");
  titulo.innerHTML = tituloRelatorio;
  var tr = document.createElement("tr");
  tr.innerHTML = `<th>Nome</th>
                    <th>Nota 1</th>
                    <th>Nota 2</th>
                    <th>Nota 3</th>
                    <th>Nota 4</th>
                    <th>Média Final</th>
                    <th>Situação</th>`;
  tabela.appendChild(titulo);
  tabela.appendChild(tr);
  relatorio.map((item) => {
    const trData = document.createElement("tr");
    trData.innerHTML = `<td>${item.nome}</td>
                            <td>${item.nota1}</td>
                            <td>${item.nota2}</td>
                            <td>${item.nota3}</td>
                            <td>${item.nota4}</td>
                            <td>${item.mediaFinal}</td>
                            <td>${item.situacao}</td>`;
    tabela.appendChild(trData);
  });

  document.getElementsByTagName("body")[0].appendChild(tabela);
}
