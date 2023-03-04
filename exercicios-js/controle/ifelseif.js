Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

function imprimirResultado(num) {
    if (num.entre(9, 10)) {
        return 'Quadro de Honra'
    } else if (nota.entre(7, 8.99)) {
        return 'Aprovado'
    }
}
console.log(imprimirResultado(10))