function sistemaDeNotas(nota) {
    let notaArrendondada = arredondarNotas(nota)
    if (notaArrendondada >= 40) {
        console.log(`Aprovado com ${notaArrendondada}`)
    } else {
        console.log(`Reprovado com ${notaArrendondada}`)
    }
}

function arredondarNotas(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}
sistemaDeNotas(38)