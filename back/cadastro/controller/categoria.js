const {json} = require('body-parser')
const categoria = require('../model/categoria')
const rota = '/categoria'

module.exports = app => {
    app.get(rota, (req, res) => {
        categoria.listaCategoria(res)
    })

    app.post(rota, (req, res) => {
        console.log(req.body)
        categoria.insereCategoria(req.body, res)
    })

    app.delete(rota, (req, res) => {
        categoria.deletaCategoria(req.body.id, res)
    })

    app.put((rota+'/:id'), (req, res) =>{
        let id = parseInt(req.params.id)
        let valores = req.body
        categoria.alterarCategoria(id, valores, res)
    })
}