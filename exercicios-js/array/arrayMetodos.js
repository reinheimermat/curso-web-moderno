const pilotos = ['vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento do array
console.log(pilotos)

pilotos.push('verstappen') // Adiciona um elemento no final do array

pilotos.shift() // Remove o primeiro elemento do array

pilotos.unshift('Hamilton') // Adiciona um elemento no começo

// Método Slice adicona e remove elementos

// Adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Removendo
pilotos.splice(3, 1) // Índice 3, remove 1 elemento
console.log(pilotos)

// * Slice retorna um novo array

// Pega uma parte do array 
const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

// Pegando do índice 1 ao índice 4
// OBS: Retorna sempre 1 índice anterior ao final
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
// [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'verstappen' ]
// output: [ 'Alonso', 'Bottas', 'Raikkonen' ]