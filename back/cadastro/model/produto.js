const conect = require('../../infra/conexao')

class Produto {

    save(produto, res){
        let sql = 'INSERT INTO produto(nome, descricao, valor, fk_vendedor, fk_fornecedor, fk_categoria) VALUES (?, ?, ?, ?, ?, ?);'
        const produtoAtts = [produto.nome, produto.descricao, produto.valor, produto.vendedorId, produto.fornecedorId, produto.categoriaId]
        conect.query(sql, produtoAtts,(erro, resultado) => {
            if(erro) {
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
        console.log(produto.body)        
    }


    alterarProduto(produto, res){
        let sql = `UPDATE produto SET nome = ?, descricao = ?, valor = ?, fk_vendedor = ?, fk_fornecedor = ?,
        fk_categoria = ? WHERE id = ?`
        const produtoAtts = [produto.nome, produto.descricao, produto.valor, produto.vendedorId, produto.fornecedorId, produto.categoriaId, produto.id]
        conect.query(sql, produtoAtts, (erro, resultado) => {
            if(erro) {
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    listarProduto(res){
        const sql = 'SELECT * FROM produto'
        conect.query(sql,(erro, resultado) => {
            console.log(resultado)
            if(erro) {
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    deletarProduto(id, res){
        let sql = 'DELETE FROM produto WHERE id = ?'
        conect.query(sql, id,(erro, resultado) => {
            if(erro) {
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    
}

module.exports = new Produto