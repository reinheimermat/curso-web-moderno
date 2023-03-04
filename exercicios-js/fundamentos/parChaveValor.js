// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec () {
    const saudacao = 'Falaa' // Contexto Léxico 2
    return saudacao
}
console.log(saudacao)
console.log(exec())

// * Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        rua: 'Rua Muito Legal!',
        numero: 123
    }
}