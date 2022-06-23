const conexao = require('../../infra/conexao')

class Fornecedor {

    adicionaFornecedor(fornecedor, res){
        let sql = 'INSERT INTO fornecedor SET ?'
        conexao.query(sql, fornecedor,(erro, resultado) => {
            if(erro) {
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    alterarFornecedor(id, nome, res){
        let sql = 'UPDATE fornecedor SET ? WHERE id = ?'
        conexao.query(sql,[nome, id], (erro, resultado) => {
            if(erro) {
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    listaFornecedor(res){
        const sql = 'SELECT * FROM fornecedor'
        conexao.query(sql,(erro, resultado) => {
            if(erro) {
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
}

module.exports = new Fornecedor