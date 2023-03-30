// * usando a notação literal
const obj1 = {}
console.log(obj1)

// * Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// * Funções contrutoras
function Produto(nome, preco, desc) {
    this.nome = this.nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }

}