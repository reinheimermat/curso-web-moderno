
function parOuImpar(numeros) {
    let numerosPares = 0
    let numerosImpares = 0
    
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            numerosPares++
        } else {
            numerosImpares++
        }
    }

    return `Números pares: ${numerosPares}, Números impares: ${numerosImpares}`
}
console.log(parOuImpar([10, 4, 5, 7, 8, 12]))