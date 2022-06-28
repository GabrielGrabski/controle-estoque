const conexao = require("../../infra/conexao");

class Categoria {
  insereCategoria(categoria, res) {
    let sql = "INSERT INTO categoria SET ?";
    conexao.query(sql, categoria, (erro, resultado) => {
      if (erro) {
        res.status(400).json(resultado);
      } else {
        res.status(200).json(resultado);
      }
    });
  }

  alterarCategoria(id, valores, res) {
    let sql = "UPDATE categoria SET ? WHERE id = ?";
    conexao.query(sql, [valores, id], (erro, resultado) => {
      if (erro) {
        res.status(400).json(resultado);
      } else {
        res.status(200).json(resultado);
      }
    });
  }

  listaCategoria(res) {
    const sql = "SELECT * FROM categoria";
    conexao.query(sql, (erro, resultado) => {
      if (erro) {
        res.status(400).json(resultado);
      } else {
        res.status(200).json(resultado);
      }
    });
  }

  deletaCategoria(id, res) {
    let sql = "DELETE FROM categoria WHERE id = ?";
    conexao.query(sql, id, (erro, resultado) => {
      if (erro) {
        res.status(400).json(resultado);
      } else {
        res.status(200).json(resultado);
      }
    });
  }
}

function enviarForm(url, body) {
  console.log("Body=", body);
  let requisicao = new XMLHttpRequest();
  console.log(url);
  requisicao.open("post", url, true);
  requisicao.setRequestHeader("Content-type", "application/json");
  requisicao.send(JSON.stringify(body));

  return requisicao.responseText;
}

function cadastroCategoria() {
  event.preventDefault();
  let url = "http://127.0.0.1:3000/categoria";
  let categoria = document.getElementById("cadastro").value;

  console.log(categoria);

  body = {
    cadastro: cadastro,
  };

  enviarForm(url, body);
}

module.exports = new Categoria();
