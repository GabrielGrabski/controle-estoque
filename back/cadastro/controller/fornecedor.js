const {json} = require('body-parser')
const Fornecedor = require('../model/fornecedor')
const rota = '/fornecedor'

module.exports = app => {
    app.get(rota, (req, res) => {
        Fornecedor.listaFornecedor(res)
    })

    app.post(rota, (req, res) => {
        console.log(req.body)
        Fornecedor.insereFornecedor(req.body, res)
    })

    app.delete(rota, (req, res) => {
        Fornecedor.deletaFornecedor(req.body.id, res)
    })

    app.put(rota, (req, res) =>{
        Fornecedor.alterarFornecedor(req.body, res)
    })
}