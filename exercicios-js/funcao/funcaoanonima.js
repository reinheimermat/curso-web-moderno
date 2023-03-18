const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)

// funcao dentro de obj
const pessoa = {
    falar() {
        console.log('Opa')
    }
} 
pessoa.falar()