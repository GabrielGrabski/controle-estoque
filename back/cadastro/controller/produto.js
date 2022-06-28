const Produto = require('../model/produto')
const rota = '/produto'

module.exports = app => {
    app.get(rota, (req, res) => {
        Produto.listarProduto(res)
    })

    app.post(rota, (req, res) => {
        console.log(req.body)
        Produto.save(req.body, res)
    })

    app.delete(rota, (req, res) => {
        Produto.deletarProduto(req.body.id, res)
    })

    app.put(rota, (req, res) =>{
        Produto.alterarProduto(req.body, res)
    })
}