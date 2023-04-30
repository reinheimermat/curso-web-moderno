const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array com os preços

// Passando o Json para Objeto
const paraObjeto = json => JSON.parse(json)

// Pegando apenas o preco do Objeto
const apenasPreco = produto => produto.preco

// Utilizando o map para juntar tudo
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)