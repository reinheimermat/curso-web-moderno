function maiorEMenor(vetor) {
    let maior
    let menor
    for(let i = 0; i < vetor.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior) {
                maior = vetor[i]
            }
            if (vetor[i] < menor) {
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}
console.log(maiorEMenor([1,2,3,4,5]))

// * Conceito de Truthy e Falsy
function maiorEMenor2(vetor) {
    let maior
    let menor
    for(let i = 0; i < vetor.length; i++) {
        if (!maior && !menor) {
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior) {
                maior = vetor[i]
            }
            if (vetor[i] < menor) {
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}
console.log(maiorEMenor2([2,3,4,5,6,7,8]))