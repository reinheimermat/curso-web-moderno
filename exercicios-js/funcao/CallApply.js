function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco())

// Call / Apply
const carro = { preco: 49990, desc: 0.20}

// * O método call() invoca uma função com um dado valor 
// * this e argumentos passados individualmente.
console.log(getPreco.call(carro, 017, '$'))

// * apply() aceita um único array de argumentos.
console.log(getPreco.apply(carro, [0.17, '$']))