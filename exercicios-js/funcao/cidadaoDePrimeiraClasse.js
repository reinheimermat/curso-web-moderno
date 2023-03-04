// Função em JS é First-Class Object (Citizens)

// criar de forma literal
function fun1() {}

// Armazenar em uma varial
const fun2 = function () {}

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Olá' }
console.log(obj.falar())

// Passar uma função como param
function run(fun) {
    fun()
}
run(function () { console.log('Executando...') })

// Uma função pode retornar/conter uma função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
// como chamar
soma(2,3)(4) // output: 9
const cincoMais = soma(2,3)
cincoMais(4)

