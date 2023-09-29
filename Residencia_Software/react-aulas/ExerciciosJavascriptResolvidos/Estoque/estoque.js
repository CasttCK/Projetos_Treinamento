const produtos = [
    {nome: 'TV', preco: 1299.90, quantidade: 6},
    {nome: 'Table', preco: 3119.90, quantidade: 20},
    {nome: 'Smartphone', preco: 1199.99, quantidade: 45},
    {nome: 'Notebook', preco: 5199.99, quantidade: 10},
    {nome: 'Computador Gamer', preco: 22538.90, quantidade: 5},
]

function pesquisarProduto(){
    var valorBusca = document.getElementById('pesquisa').value;
    const produto = produtos.filter(p => p.nome.toLowerCase().includes(valorBusca.toLowerCase()));
    gerarVisualizacaoProduto(produto);
}

function gerarVisualizacaoProduto(prod){
    var elemento = document.getElementById('resultado')
    if(prod.length == 0){
        return elemento.innerHTML = `<h4>Produto não localizado</h4>`
    }

    var table = document.createElement('table')
    var tr = document.createElement('tr')
    tr.innerHTML = `<th>Nome</th><th>Preco</th><th>Quantidade</th>`
    table.appendChild(tr)
    prod.map(p => {
        var trData = document.createElement('tr')
        trData.innerHTML = `<td>${p.nome}</td><td>${p.preco}</td><td>${p.quantidade}</td>`;
        table.appendChild(trData)
    })

    elemento.appendChild(table);
}

function gerarValorTotalEstoque(){
    const valorTotal = produtos.reduce((acumulador, corrente) =>  acumulador + (corrente.preco * corrente.quantidade), 0);
    document.getElementById('resultado').innerHTML = `<h4>Valor total em estoque: R$ ${valorTotal.toFixed(2)}</h4>`
}

function gerarQuantidadeTotalEstoque(){
    const quantidadeTotal = produtos.reduce((acumulador, corrente) => acumulador + corrente.quantidade, 0);
    document.getElementById('resultado').innerHTML = `<h4>Quantidade total de produtos em estoque: ${quantidadeTotal}</h4>`
}
