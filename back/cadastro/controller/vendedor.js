const {json} = require('body-parser')
const Vendedor = require('../model/vendedor')
const rota = '/vendedor'

module.exports = app => {
    app.get(rota, (req, res) => {
        Vendedor.listaVendedor(res)
    })

    app.post(rota, (req, res) => {
        console.log(req.body)
        Vendedor.insereVendedor(req.body, res)
    })

    app.delete(rota, (req, res) => {
        Vendedor.deletaVendedor(req.body.id, res)
    })

    app.put(rota, (req, res) =>{
        Vendedor.alterarVendedor(req.body, res)
    })
}