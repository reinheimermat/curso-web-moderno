// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// * template string
const produto = 'Ipad'
console.log(`${produto} é caro!`)

// * operador Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras) // C o [ 'd', '3', 'r' ]

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = {nome: 'Ana', idade: 9}
console.log(i, nome)