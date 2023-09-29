//var nomes = ["João", "Juliana", "Alexandre", "Roberto"];
//const [primeiro, ...a] = nomes;

// function nomesComRest(...nomes){
//     console.log(nomes)
// }

// nomesComRest("João", "Juliana", "Alexandre", "Roberto")
// nomesComRest("João", "Juliana")

// function somarNumeros(...numeros){
//     console.log(numeros)
// }

// var numeros = [2, 2, 3]

// somarNumeros(...numeros)


const pessoa = {
    nome: "Abner",
    idade: 30,
    endereco:{
        cidade: "Petrópolis",
        estado: "Rio de janeiro"
    },
    gritar: function(){
        console.log("AAAAAAAAAAAAAAAAAA")
    }
}

const pessoa2 = {...pessoa, endereco:{...pessoa.endereco, cidade: "Rio"}};

console.log(pessoa2)
