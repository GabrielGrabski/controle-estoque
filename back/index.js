const customExpress = require('./config/customExpress')
const conexao = require('./infra/conexao')
const app = customExpress()

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('Conectado...')

        const app = customExpress()
        app.listen(3000, () => console.log('Servidor ativo na porta 3000'))
    }
})