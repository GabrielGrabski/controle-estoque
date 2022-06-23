const {json} = require('body-parser')
const Fornecedor = require('../model/fornecedor')
const rota = '/fornecedor'

module.exports = app => {
    app.get(rota, (req, res) => {
        Fornecedor.listaFornecedor(res)
    })

    app.post(rota, (req, res) => {
        console.log(req.body)
        Fornecedor.adicionaFornecedor(req.body, res)
    })
}