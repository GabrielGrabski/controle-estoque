class DB {

    init(conexao) {
        this.conexao = conexao
        this.gerarCategoria()
        this.gerarVendedor()
        this.gerarFornecedor()
        this.gerarProduto()
    }

    gerarCategoria() {
        const sql = `
        CREATE TABLE IF NOT EXISTS CATEGORIA (
            ID INTEGER NOT NULL AUTO_INCREMENT,
            NOME VARCHAR(200) NOT NULL,
            PRIMARY KEY (ID)
        );`
        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Categoria gerado com sucesso!')
            }
        })
    }

    gerarVendedor() {
        const sql = `CREATE TABLE IF NOT EXISTS VENDEDOR (
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
            );`
        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Vendedor gerado com sucesso!')
            }
        })
    }

    gerarFornecedor() {
        let sql = 'CREATE TABLE IF NOT EXISTS fornecedor' +
            '(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,' +
            'nome VARCHAR(200) NOT NULL,' +
            'cnpj VARCHAR(14) NOT NULL,' +
            'telefone VARCHAR(13) NOT NULL,' +
            'cep VARCHAR(8) NOT NULL,' +
            'rua VARCHAR (200) NOT NULL,' +
            'bairro VARCHAR(100) NOT NULL,' +
            'cidade VARCHAR(100) NOT NULL,' +
            'uf VARCHAR(2) NOT NULL)'
        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Fornecedor gerado com sucesso!')
            }
        })
    }

    gerarProduto() {
        let sql = `
            CREATE TABLE IF NOT EXISTS PRODUTO (
                ID INTEGER NOT NULL AUTO_INCREMENT,
                NOME VARCHAR(200) NOT NULL,
                VALOR INTEGER NOT NULL,
                DESCRICAO VARCHAR(255),
                FK_VENDEDOR INTEGER NOT NULL,
                FK_FORNECEDOR INTEGER NOT NULL,
                FK_CATEGORIA INTEGER NOT NULL,
                PRIMARY KEY (ID),
                FOREIGN KEY(FK_VENDEDOR) REFERENCES VENDEDOR(ID),
                FOREIGN KEY(FK_FORNECEDOR) REFERENCES FORNECEDOR(ID),
                FOREIGN KEY(FK_CATEGORIA) REFERENCES CATEGORIA(ID)
            );
        `
        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Produto gerado com sucesso!')
            }
        })
    }
}

module.exports = new DB