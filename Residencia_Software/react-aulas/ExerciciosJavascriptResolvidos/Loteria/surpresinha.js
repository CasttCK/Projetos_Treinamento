const modeloJogos = [
    {nome: 'megasena', volante: 60, aposta: 6},
    {nome: 'lotofacil', volante: 25, aposta: 15},    
    {nome: 'quina', volante: 80, aposta: 5},
]

function obterValor(){
    var opJogo = document.getElementById("jogos").value;
    gerarJogo(opJogo)
}

function gerarJogo(opJogo){
    const {volante, aposta} = modeloJogos.find(modelo => modelo.nome === opJogo)
    const numerosGerados = [];

    for(var i = 0; i < aposta; i++){    
        let numero = Math.floor(Math.random() * (volante - 1) + 1)
        if(numerosGerados.find(e => e === numero)){
            i--;
        }else{
            numerosGerados.push(numero);
        }    
    }
    numerosGerados.sort((a, b) => a - b)    
    imprimirTela(numerosGerados);
}

function imprimirTela(numeros){    
    var elemento = document.getElementById("resultado")
    elemento.innerHTML = numeros;    
}


