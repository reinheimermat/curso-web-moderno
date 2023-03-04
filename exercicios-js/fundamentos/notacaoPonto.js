const obj1 = {}
obj1.nome = 'Bola'
obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesa')
const obj4 = new Obj('Matheus', 'Reinheimer')
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj4.sobrenome)