var meuArray = [1,2,3]
var meuArray2 = [6,7,8]

var arrayConcatenado = [...meuArray, 4, 5, ...meuArray2, 9, 10]

function executar(){
    console.log(arrayConcatenado)
}

//setInterval(executar, 2000)
setTimeout(executar, 2000)

