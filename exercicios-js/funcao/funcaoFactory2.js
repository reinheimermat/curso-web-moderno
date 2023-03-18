function criarProtudo(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.50
    }
}
console.log(criarProtudo('Matheus', 55.00))