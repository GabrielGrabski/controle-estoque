const {json} = require('body-parser')
const categoria = require('../model/categoria')
const rota = '/categoria'

module.exports = app => {
    app.get(rota, (req, res) => {
        categoria.listacategoria(res)
    })

    app.post(rota, (req, res) => {
        console.log(req.body)
        categoria.inserecategoria(req.body, res)
    })

    app.delete(rota, (req, res) => {
        categoria.deletacategoria(req.body.id, res)
    })

    app.put(rota, (req, res) =>{
        categoria.alterarcategoria(req.body, res)
    })
}