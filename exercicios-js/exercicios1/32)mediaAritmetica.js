function mediaAritmetica(vetor) {
    let calculo = 0
    for(let i = 0; i < vetor.length; i++) {
        calculo += vetor[i]
    }
    return calculo / vetor.length
}

console.log(mediaAritmetica([10, 20, 30]))