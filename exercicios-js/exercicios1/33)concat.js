function concatenar() {
    const vetorInteiro = [57, 12, 17, 15]
    const vetorString = ['sou', 'o', 'Matheus', ':)']
    const vetorDouble = [10, 20, 30, 40]
    const concatena = vetorInteiro.concat(vetorString, vetorDouble)
    return concatena
}
console.log(concatenar())