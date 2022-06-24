const conexao = require('../../infra/conexao')

class Categoria {

    adicionarCategoria(categoria, res){
        let sql = 'INSERT INTO categoria SET ?'
        conexao.query(sql, categoria,(erro, resultado) => {
            if(erro) {
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    alterarCategoria(id, nome, res){
        let sql = 'UPDATE categoria SET ? WHERE id = ?'
        conexao.query(sql,[nome, id], (erro, resultado) => {
            if(erro) {
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    listarCategoria(res){
        const sql = 'SELECT * FROM categoria'
        conexao.query(sql,(erro, resultado) => {
            if(erro) {
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
}

module.exports = new Categoria