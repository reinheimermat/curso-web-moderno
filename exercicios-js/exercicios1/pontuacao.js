// let lista = '10, 20, 20, 8, 25, 3, 0, 3, 1'
let stringPontuacoes = '30, 40, 20, 4, 51, 25, 42, 38, 56, 0'

function calcularPontuacao(stringPontuacoes) {
    pontuacoes = stringPontuacoes.split(', ')
    piorJogo = 1
    qtdRecordes = 0
    maiorJogo = pontuacoes[0]
    menorJogo = pontuacoes[0]

    for (let i = 1; i < pontuacoes.lenght; i++) {
        if (pontuacoes[i] > maiorJogo) {
            maiorJogo = pontuacoes[i]
            qtdRecordes++
        } else if (pontuacoes[i] < menorJogo) {
            menorJogo = pontuacoes[i]
            piorJogo = i + 1
        }
    }
    return [qtdRecordes, piorJogo]
}