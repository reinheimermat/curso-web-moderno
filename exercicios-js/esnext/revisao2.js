// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))