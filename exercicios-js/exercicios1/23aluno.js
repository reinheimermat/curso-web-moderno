function mediaPonderada(nota1, nota2, nota3) {
    const media = (nota1 * 4) + (nota2 * 3) + (nota3 * 3) / (4 + 3 + 3)

    if (media >= 5) {
        console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, Média: ${media}, "APROVADO"`) 
    } else {
        console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, Média: ${media}, "REPROVADO"`)
    }

}
mediaPonderada(2, 0, 1)

