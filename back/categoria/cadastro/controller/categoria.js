const {json} = require('body-parser')
const Categoria = require('../model/categoria')
const rota = '/categoria'

module.exports = app => {
    app.get(rota, (req, res) => {
        Categoria.listaCateogira(res)
    })

    app.post(rota, (req, res) => {
        console.log(req.body)
        Categoria.adicionaCategoria(req.body, res)
    })
}