class DB {

    init(conexao){
        this.conexao = conexao
        this.gerarVendedor()
        this.gerarFornecedor()        
    }

    gerarVendedor(){
        let sql = `create table if not exists VENDEDOR (
            ID INTEGER NOT NULL AUTO_INCREMENT,
            NOME VARCHAR(200) NOT NULL,
            CNPJ VARCHAR(14) NOT NULL,
            EMAIL VARCHAR(100) NOT NULL,
            CEP VARCHAR(8) NOT NULL,
            LOGRADOURO VARCHAR (200) NOT NULL,
            BAIRRO VARCHAR(100) NOT NULL,
            CIDADE VARCHAR(100) NOT NULL,
            ESTADO VARCHAR(2) NOT NULL,
            PRIMARY KEY (ID)
            )`
            this.conexao.query(sql, erro => {
                if(erro){
                    console.log(erro)
                }else{
                    console.log('Vendedor gerado com sucesso!')
                }
            })
        }
        gerarFornecedor(){
            let sql = 'CREATE TABLE IF NOT EXISTS fornecedor'+
            '(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
            'nome VARCHAR(200) NOT NULL,'+
            'cnpj VARCHAR(14) NOT NULL,'+
            'email VARCHAR(40) NOT NULL,'+
            'cep VARCHAR(8) NOT NULL,'+
            'logradouro VARCHAR (200) NOT NULL,'+
            'bairro VARCHAR(100) NOT NULL,'+ 
            'cidade VARCHAR(100) NOT NULL,'+
            'uf VARCHAR(2) NOT NULL)'   
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