const estoque = [
  { nome: "Produto0", preco: 2564.27, quantidade: 462 },
  { nome: "Produto1", preco: 1033.95, quantidade: 273 },
  { nome: "Produto2", preco: 1678.84, quantidade: 420 },
  { nome: "Produto3", preco: 3402.07, quantidade: 490 },
  { nome: "Produto4", preco: 4156.0, quantidade: 153 },
  { nome: "Produto5", preco: 2968.49, quantidade: 148 },
  { nome: "Produto6", preco: 3195.88, quantidade: 107 },
  { nome: "Produto7", preco: 1563.37, quantidade: 147 },
  { nome: "Produto8", preco: 2413.15, quantidade: 407 },
  { nome: "Produto9", preco: 2537.68, quantidade: 456 },
  { nome: "Produto10", preco: 4212.79, quantidade: 209 },
  { nome: "Produto11", preco: 1239.28, quantidade: 242 },
  { nome: "Produto12", preco: 2692.82, quantidade: 177 },
  { nome: "Produto13", preco: 2288.14, quantidade: 460 },
  { nome: "Produto14", preco: 4954.63, quantidade: 440 },
  { nome: "Produto15", preco: 1886.49, quantidade: 204 },
  { nome: "Produto16", preco: 2834.46, quantidade: 360 },
  { nome: "Produto17", preco: 4035.95, quantidade: 336 },
  { nome: "Produto18", preco: 4336.54, quantidade: 203 },
  { nome: "Produto19", preco: 3511.95, quantidade: 410 },
  { nome: "Produto20", preco: 2280.16, quantidade: 433 },
  { nome: "Produto21", preco: 2566.58, quantidade: 126 },
  { nome: "Produto22", preco: 4372.59, quantidade: 163 },
  { nome: "Produto23", preco: 3649.93, quantidade: 377 },
  { nome: "Produto24", preco: 4246.19, quantidade: 102 },
  { nome: "Produto25", preco: 2429.92, quantidade: 385 },
  { nome: "Produto26", preco: 1127.97, quantidade: 312 },
  { nome: "Produto27", preco: 2510.14, quantidade: 424 },
  { nome: "Produto28", preco: 1899.59, quantidade: 471 },
  { nome: "Produto29", preco: 2282.77, quantidade: 122 },
  { nome: "Produto30", preco: 4779.52, quantidade: 209 },
  { nome: "Produto31", preco: 3191.11, quantidade: 366 },
  { nome: "Produto32", preco: 2595.17, quantidade: 325 },
  { nome: "Produto33", preco: 4442.95, quantidade: 294 },
  { nome: "Produto34", preco: 4305.79, quantidade: 316 },
  { nome: "Produto35", preco: 2411.4, quantidade: 388 },
  { nome: "Produto36", preco: 4054.57, quantidade: 190 },
  { nome: "Produto37", preco: 2476.12, quantidade: 188 },
  { nome: "Produto38", preco: 3795.75, quantidade: 353 },
  { nome: "Produto39", preco: 3763.49, quantidade: 314 },
  { nome: "Produto40", preco: 2591.71, quantidade: 318 },
  { nome: "Produto41", preco: 4728.17, quantidade: 499 },
  { nome: "Produto42", preco: 4050.51, quantidade: 329 },
  { nome: "Produto43", preco: 4557.97, quantidade: 309 },
  { nome: "Produto44", preco: 2615.73, quantidade: 337 },
  { nome: "Produto45", preco: 4696.87, quantidade: 425 },
  { nome: "Produto46", preco: 2277.96, quantidade: 299 },
  { nome: "Produto47", preco: 1451.22, quantidade: 400 },
  { nome: "Produto48", preco: 4470.96, quantidade: 253 },
  { nome: "Produto49", preco: 1620.95, quantidade: 456 },
];

function obterQuantidadeDeProdutos() {
  var quantidade = estoque.reduce((acumulador, corrente) => {
      return acumulador + corrente.quantidade
    }, 0);
  console.log(quantidade);
}

function buscaPorPreco() {
  const novoArray = estoque.filter((p) => p.preco > 2000);
  console.log(novoArray);
}

function realtorioValorTotal() {
  const novoArray = estoque.map((produto) => {
    return {
      ...produto,
      valorTotal: (produto.preco * produto.quantidade).toFixed(2),
    };
  });

  console.log(novoArray);
}

obterQuantidadeDeProdutos();
