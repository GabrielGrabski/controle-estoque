//const express = require('express');
const conect = require('../../infra/conexao')

class Vendedor {

    insereVendedor(vendedor, res){
        let sql = 'INSERT INTO vendedor SET ?'        
        conect.query(sql, vendedor,(erro, resultado) => {
            if(erro) {
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
        console.log(vendedor.body)        
    }


    alterarVendedor(vendedor, res){
        let sql = `UPDATE vendedor SET nome = ?, cnpj = ?, email = ?, cep = ?,
        rua = ?, bairro = ?, cidade = ?, uf = ?  WHERE id = ?`
        conect.query(sql,[vendedor.nome, vendedor.cnpj, vendedor.email, vendedor.cep, vendedor.rua,
            vendedor.bairro, vendedor.cidade, vendedor.uf, vendedor.id], (erro, resultado) => {
            if(erro) {
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    listaVendedor(res){
        const sql = 'SELECT * FROM vendedor'
        conect.query(sql,(erro, resultado) => {
            if(erro) {
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    deletaVendedor(id, res){
        let sql = 'DELETE FROM vendedor WHERE id = ?'
        conect.query(sql, id,(erro, resultado) => {
            if(erro) {
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    
}


function enviarForm(url, body){
    console.log("Body=", body)
    let requisicao = new XMLHttpRequest();
    console.log(url)
    requisicao.open("post", url , true)
    requisicao.setRequestHeader("Content-type", "application/json")
    requisicao.send(JSON.stringify(body))

    return requisicao.responseText
}

function cadastroVendedor() {
    event.preventDefault()
    let url = "http://127.0.0.1:3000/vendedor"
    let nome = document.getElementById("nome").value
    let cnpj = document.getElementById("cnpj").value
    let email = document.getElementById("email").value
    let cep = document.getElementById("cep").value
    let rua = document.getElementById("rua").value
    let bairro = document.getElementById("bairro").value
    let cidade = document.getElementById("cidade").value
    let uf = document.getElementById("uf").value

    console.log(nome)
    console.log(cnpj)
    console.log(email)
    console.log(cep)
    console.log(rua)
    console.log(bairro)
    console.log(cidade)
    console.log(uf)

    body = {
        "nome": nome,
        "cnpj": cnpj,
        "email": email,
        "cep": cep,
        "rua": rua,
        "bairro": bairro,
        "cidade": cidade,
        "uf": uf
    }

    enviarForm(url, body)    

}



function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");    
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);   
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

    
    var cep = valor.replace(/\D/g, '');
    
    if (cep != "") {        
        var validacep = /^[0-9]{8}$/;
       
        if(validacep.test(cep)) {
           
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";  
            
            var script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            document.body.appendChild(script);

        } 
        else {
            
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
        
        limpa_formulário_cep();
    }
};


module.exports = new Vendedor