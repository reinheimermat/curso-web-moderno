function SistemaDeNotas(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com ${notaCorrigida}`)
    } else {
        console.log(`Reprovado com ${notaCorrigida}`)
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}
console.log(SistemaDeNotas(38))