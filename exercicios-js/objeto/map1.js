const nums = [1, 2, 3, 4 ,5]

// For com propósito
let resultado = nums.map((e) => {
    return e * 2
})

console.log(resultado)
// output: [ 2, 4, 6, 8, 10 ]

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => e.toLocaleString("pt-BR", {style: 'currency', currency:'BRL'})

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)