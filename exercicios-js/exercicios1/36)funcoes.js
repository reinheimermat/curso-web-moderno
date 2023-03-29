function calculo1(vetor, multiplicador) {
    let res = []
    vetor.forEach(element => {
        res.push(element * multiplicador)
    });
    return res
}

function calculo2(vetor, multiplicador) {
    let res = []
    if (multiplicador < 5) return
    vetor.forEach(element => {
        res.push(element * multiplicador)
    })
    return res
}
console.log(calculo1([10, 20, 30], 3))