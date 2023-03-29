function NumerosNegativos(vetor) {
    let negativos = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativos++
        }
    }
    return `A quantidade de números negativos é ${negativos}`
}

console.log(NumerosNegativos([10, 20, 10, 1, -6, 2, 1]))