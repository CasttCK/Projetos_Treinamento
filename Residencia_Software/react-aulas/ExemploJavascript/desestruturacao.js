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

const {nome, idade, endereco} = pessoa
const {cidade} = endereco;
console.log(nome);
console.log(idade);
console.log(cidade);

var letras = ["A", "B", "C", "D", "E", "F"]
const[primeiro,, terceiro,,quinto] = letras

console.log(primeiro);
console.log(terceiro);
console.log(quinto);

