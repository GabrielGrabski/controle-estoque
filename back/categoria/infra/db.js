class DB {

    init(conexao){
        this.conexao = conexao
        this.gerarCategoria()        
    }

    gerarCategoria(){
        let sql = 'CREATE TABLE IF NOT EXISTS categoria'+
        '(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'categoria VARCHAR(200) NOT NULL,'+   
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