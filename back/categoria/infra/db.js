class DB {

    init(conexao){
        this.conexao = conexao
        this.gerarFornecedor()        
    }

    gerarFornecedor(){
        let sql = 'CREATE TABLE IF NOT EXISTS fornecedor'+
        '(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'nomeProduto VARCHAR(200) NOT NULL,'+   
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Fornecedor gerado com sucesso!')
            }
        })       
    }  
}

module.exports = new DB