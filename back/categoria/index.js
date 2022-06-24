const customExpress = require('./config/customExpress')
const conexao = require('./infra/conexao')
const DB = require('./infra/db')
const app = customExpress()

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('Conectado ao banco de dados!')      
        DB.init(conexao)     
        app.listen(3000,() => console.log('Servidor rodando na porta 3000'))
    }
})