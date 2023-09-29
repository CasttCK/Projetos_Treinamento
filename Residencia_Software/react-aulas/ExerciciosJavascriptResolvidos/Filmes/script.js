const filmes = [
  { id: 12811, titulo: "Titulo 1", duracao: 181, categoria: "Aventura" },
  { id: 39531, titulo: "Titulo 2", duracao: 60, categoria: "Comedia" },
  { id: 99058, titulo: "Titulo 3", duracao: 72, categoria: "Terror" },
  { id: 29600, titulo: "Titulo 4", duracao: 156, categoria: "Romance" },
  { id: 25354, titulo: "Titulo 5", duracao: 157, categoria: "Terror" },
  { id: 31285, titulo: "Titulo 6", duracao: 78, categoria: "Aventura" },
  { id: 75156, titulo: "Titulo 7", duracao: 67, categoria: "Comedia" },
  { id: 75757, titulo: "Titulo 8", duracao: 114, categoria: "Comedia" },
  { id: 95680, titulo: "Titulo 9", duracao: 219, categoria: "Comedia" },
  { id: 50232, titulo: "Titulo 10", duracao: 66, categoria: "Suspense" },
  { id: 33499, titulo: "Titulo 11", duracao: 105, categoria: "Romance" },
  { id: 45155, titulo: "Titulo 12", duracao: 205, categoria: "Romance" },
  { id: 32747, titulo: "Titulo 13", duracao: 221, categoria: "Suspense" },
  { id: 69394, titulo: "Titulo 14", duracao: 235, categoria: "Ação" },
  { id: 96274, titulo: "Titulo 15", duracao: 108, categoria: "Romance" },
  { id: 58047, titulo: "Titulo 16", duracao: 222, categoria: "Ação" },
  { id: 23609, titulo: "Titulo 17", duracao: 192, categoria: "Aventura" },
  { id: 82871, titulo: "Titulo 18", duracao: 180, categoria: "Comedia" },
  { id: 39117, titulo: "Titulo 19", duracao: 183, categoria: "Comedia" },
  { id: 91180, titulo: "Titulo 20", duracao: 237, categoria: "Ação" },
  { id: 50281, titulo: "Titulo 21", duracao: 189, categoria: "Romance" },
  { id: 57734, titulo: "Titulo 22", duracao: 126, categoria: "Comedia" },
  { id: 31385, titulo: "Titulo 23", duracao: 91, categoria: "Ação" },
  { id: 40343, titulo: "Titulo 24", duracao: 182, categoria: "Comedia" },
  { id: 61386, titulo: "Titulo 25", duracao: 134, categoria: "Romance" },
  { id: 12621, titulo: "Titulo 26", duracao: 145, categoria: "Ação" },
  { id: 95356, titulo: "Titulo 27", duracao: 211, categoria: "Romance" },
  { id: 64913, titulo: "Titulo 28", duracao: 95, categoria: "Terror" },
  { id: 34854, titulo: "Titulo 29", duracao: 210, categoria: "Comedia" },
  { id: 93509, titulo: "Titulo 30", duracao: 86, categoria: "Terror" },
  { id: 21605, titulo: "Titulo 31", duracao: 122, categoria: "Suspense" },
  { id: 71631, titulo: "Titulo 32", duracao: 60, categoria: "Comedia" },
  { id: 49612, titulo: "Titulo 33", duracao: 140, categoria: "Ação" },
  { id: 12580, titulo: "Titulo 34", duracao: 207, categoria: "Terror" },
  { id: 35494, titulo: "Titulo 35", duracao: 89, categoria: "Suspense" },
  { id: 70429, titulo: "Titulo 36", duracao: 139, categoria: "Terror" },
  { id: 63231, titulo: "Titulo 37", duracao: 139, categoria: "Romance" },
  { id: 45545, titulo: "Titulo 38", duracao: 112, categoria: "Romance" },
  { id: 26326, titulo: "Titulo 39", duracao: 126, categoria: "Comedia" },
  { id: 86496, titulo: "Titulo 40", duracao: 136, categoria: "Comedia" },
  { id: 29863, titulo: "Titulo 41", duracao: 232, categoria: "Aventura" },
  { id: 41871, titulo: "Titulo 42", duracao: 151, categoria: "Terror" },
  { id: 11211, titulo: "Titulo 43", duracao: 136, categoria: "Comedia" },
  { id: 66889, titulo: "Titulo 44", duracao: 76, categoria: "Ação" },
  { id: 45771, titulo: "Titulo 45", duracao: 109, categoria: "Terror" },
  { id: 48412, titulo: "Titulo 46", duracao: 103, categoria: "Aventura" },
  { id: 76323, titulo: "Titulo 47", duracao: 116, categoria: "Terror" },
  { id: 54289, titulo: "Titulo 48", duracao: 60, categoria: "Romance" },
  { id: 84836, titulo: "Titulo 49", duracao: 186, categoria: "Comedia" },
  { id: 12418, titulo: "Titulo 50", duracao: 135, categoria: "Ação" },
  { id: 69280, titulo: "Titulo 51", duracao: 216, categoria: "Terror" },
  { id: 33306, titulo: "Titulo 52", duracao: 87, categoria: "Ação" },
  { id: 15863, titulo: "Titulo 53", duracao: 172, categoria: "Romance" },
  { id: 30707, titulo: "Titulo 54", duracao: 135, categoria: "Terror" },
  { id: 16073, titulo: "Titulo 55", duracao: 72, categoria: "Romance" },
  { id: 69809, titulo: "Titulo 56", duracao: 191, categoria: "Suspense" },
  { id: 69662, titulo: "Titulo 57", duracao: 79, categoria: "Ação" },
  { id: 96170, titulo: "Titulo 58", duracao: 95, categoria: "Ação" },
  { id: 74450, titulo: "Titulo 59", duracao: 179, categoria: "Ação" },
  { id: 57283, titulo: "Titulo 60", duracao: 154, categoria: "Suspense" },
  { id: 79566, titulo: "Titulo 61", duracao: 82, categoria: "Ação" },
  { id: 79597, titulo: "Titulo 62", duracao: 158, categoria: "Terror" },
  { id: 34099, titulo: "Titulo 63", duracao: 191, categoria: "Terror" },
  { id: 18533, titulo: "Titulo 64", duracao: 146, categoria: "Ação" },
  { id: 90962, titulo: "Titulo 65", duracao: 94, categoria: "Romance" },
  { id: 69093, titulo: "Titulo 66", duracao: 65, categoria: "Terror" },
  { id: 33812, titulo: "Titulo 67", duracao: 139, categoria: "Comedia" },
  { id: 42784, titulo: "Titulo 68", duracao: 169, categoria: "Romance" },
  { id: 94043, titulo: "Titulo 69", duracao: 238, categoria: "Comedia" },
  { id: 15436, titulo: "Titulo 70", duracao: 95, categoria: "Terror" },
  { id: 40585, titulo: "Titulo 71", duracao: 212, categoria: "Romance" },
  { id: 41562, titulo: "Titulo 72", duracao: 116, categoria: "Aventura" },
  { id: 29576, titulo: "Titulo 73", duracao: 70, categoria: "Suspense" },
  { id: 75231, titulo: "Titulo 74", duracao: 139, categoria: "Aventura" },
  { id: 50111, titulo: "Titulo 75", duracao: 136, categoria: "Aventura" },
  { id: 38202, titulo: "Titulo 76", duracao: 135, categoria: "Suspense" },
  { id: 96758, titulo: "Titulo 77", duracao: 111, categoria: "Aventura" },
  { id: 21184, titulo: "Titulo 78", duracao: 105, categoria: "Aventura" },
  { id: 76553, titulo: "Titulo 79", duracao: 207, categoria: "Ação" },
  { id: 67364, titulo: "Titulo 80", duracao: 172, categoria: "Ação" },
  { id: 50869, titulo: "Titulo 81", duracao: 238, categoria: "Comedia" },
  { id: 41322, titulo: "Titulo 82", duracao: 115, categoria: "Aventura" },
  { id: 76242, titulo: "Titulo 83", duracao: 227, categoria: "Ação" },
  { id: 21873, titulo: "Titulo 84", duracao: 171, categoria: "Comedia" },
  { id: 50581, titulo: "Titulo 85", duracao: 158, categoria: "Comedia" },
  { id: 79373, titulo: "Titulo 86", duracao: 154, categoria: "Terror" },
  { id: 48457, titulo: "Titulo 87", duracao: 222, categoria: "Comedia" },
  { id: 55359, titulo: "Titulo 88", duracao: 189, categoria: "Romance" },
  { id: 91491, titulo: "Titulo 89", duracao: 216, categoria: "Suspense" },
  { id: 14176, titulo: "Titulo 90", duracao: 114, categoria: "Ação" },
  { id: 49338, titulo: "Titulo 91", duracao: 121, categoria: "Suspense" },
  { id: 73749, titulo: "Titulo 92", duracao: 91, categoria: "Terror" },
  { id: 56087, titulo: "Titulo 93", duracao: 197, categoria: "Romance" },
  { id: 26315, titulo: "Titulo 94", duracao: 147, categoria: "Terror" },
  { id: 47358, titulo: "Titulo 95", duracao: 150, categoria: "Suspense" },
  { id: 20359, titulo: "Titulo 96", duracao: 122, categoria: "Terror" },
  { id: 88042, titulo: "Titulo 97", duracao: 199, categoria: "Aventura" },
  { id: 99328, titulo: "Titulo 98", duracao: 108, categoria: "Comedia" },
  { id: 81520, titulo: "Titulo 99", duracao: 84, categoria: "Terror" },
  { id: 56343, titulo: "Titulo 100", duracao: 180, categoria: "Terror" },
];

function gerarLista() {
  const categorias = obterCategorias();
  categorias.map((categoria) => {
    return gerarListaPorCategoria(categoria);
  });
}

function obterCategorias() {
  return filmes.reduce((acc, atual) => {
    return acc.includes(atual.categoria) ? [...acc] : [...acc, atual.categoria];
  }, []);
}

function gerarListaPorCategoria(categoria) {
  var lista = filmes.filter(
    (filme) => filme.categoria.toLowerCase() === categoria.toLowerCase()
  );
  lista.sort((a, b) => a.duracao - b.duracao);
  gerarTabelaEmTela(lista, categoria);
}

function gerarTabelaEmTela(lista, categoria) {
  var tabela = document.createElement("table");
  var titulo = document.createElement("caption");
  titulo.innerHTML = `Filmes de ${categoria}`;
  var tr = document.createElement("tr");
  tr.innerHTML = `<th>Titulo</th><th>Duração</th><th>Categoria</th>`;
  tabela.appendChild(titulo);
  tabela.appendChild(tr);

  lista.map(item => {
   const trData = tabela.insertRow();
   var data = `<td>${item.titulo}</td><td>${item.duracao}</td><td>${item.categoria}</td>`;
   trData.innerHTML = data;
   tabela.appendChild(trData)   
  })
  document.getElementsByTagName("body")[0].appendChild(tabela);
}
