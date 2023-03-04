// * Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(imprimirSoma(a + b))
}
imprimirSoma(2,3)

// Armazenando uma função arrow em uma variavel
const soma = (a,b) => {
    return a + b
}

// Retorno implícito
const subtracao = (a, b) => a - b