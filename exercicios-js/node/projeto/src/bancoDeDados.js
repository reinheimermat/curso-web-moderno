const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

// Pegar item cadastrado pelo ID
function getProduto(id) {
    return produtos[id] || {}
}

// Pega todos os itens
function getProdutos() {
    return Object.values(produtos)
}

// Exclui o item
function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }