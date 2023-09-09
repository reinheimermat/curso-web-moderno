const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bd = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

// Pegar todos os produtos cadastrados
app.get('/produtos', (req, res, next) => {
    // send = envia
    res.send(bd.getProdutos()) // converte para JSON
})

// Pegar item cadastrado pelo ID
app.get('/produtos/:id', (req, res, next) => {
    res.send(bd.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bd.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})