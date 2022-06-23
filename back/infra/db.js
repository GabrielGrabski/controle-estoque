class DB {

    init(conexao){
        this.conexao = conexao
        this.gerarFornecedor()        
    }

    gerarFornecedor(){
        let sql = 'CREATE TABLE IF NOT EXISTS fornecedor'+
        '(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'nome VARCHAR(200) NOT NULL,'+
        'cnpj VARCHAR(14) NOT NULL,'+
        'telefone VARCHAR(13) NOT NULL,'+
        'cep VARCHAR(8) NOT NULL,'+
        'logradouro VARCHAR (200) NOT NULL,'+
        'bairro VARCHAR(100) NOT NULL,'+ 
        'cidade VARCHAR(100) NOT NULL,'+
        'estado VARCHAR(2) NOT NULL)'   
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