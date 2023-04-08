// * pessoa -> 123 -> (...)
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Congela o objeto, não conseguindo alterar seu valor
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa)