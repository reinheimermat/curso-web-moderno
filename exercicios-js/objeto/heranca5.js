console.log(typeof String) // output: function
console.log(typeof Array) // output: function
console.log(typeof Object) // output: function

// * Criando novos métodos para uma função

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse()) // output: r3doC alocsE


Array.prototype.first = function() {
    return this[0]
}
console.log([1, 2, 3, 4, 5].first()) // output: 1