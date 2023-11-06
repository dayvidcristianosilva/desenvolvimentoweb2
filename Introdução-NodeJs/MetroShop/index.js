
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const connection = require("./database/database");

app.use(express.static('public'));
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.get('/', (req, res) => {
    res.send('Bem vindx ao MetroShop!')
});

produtos = [
    { codigo: 1, nome: 'Fone de Ouvido', preco: 10.0 },
    { codigo: 2, nome: 'Faca da Ana Maria Braga', preco: 5.0 },
    { codigo: 3, nome: 'Sonzinho da JBL', preco: 20 }];


//Trazendo os produtos via GET
app.get('/produtos', (req, res) => {

    var nomeFiltro = req.query.nomeFiltro;
    var precoMaximo = req.query.precoMaximo;

    var resultadodaBusca = [];
    produtos.forEach(produto => {
        if (produto.nome.includes(nomeFiltro) &&
            produto.preco <= precoMaximo) {
            resultadodaBusca.push(produto);
        }
    })
    res.send(resultadodaBusca);
   

var todosProdutos = '';
for (var i = 0; i < produtos.length; i++) {
    todosProdutos += "Código: " + produtos[i].codigo;
    todosProdutos += "Nome: " + produtos[i].nome;
    todosProdutos += "Preço: " + produtos[i].preco;
    todosProdutos += "<br>";

}
res.send(todosProdutos)
});
/*
//Trazendo os produtos via POST
app.post('/produtos', urlencodedParser, (req, res){
    var nomeFiltro = req.body.nomeFiltro;
    var precoMaximo = req.body.precoMaximo;

    var resultadodaBusca = [];
    produtos.forEach(produto => {
        if (produto.nome.includes(nomeFiltro) &&
            produto.preco <= precoMaximo) {
            resultadodaBusca.push(produto);
        }
    })
    res.send(resultadodaBusca);

    var todosProdutos = '';
    for (var i = 0; i < produtos.length; i++) {
        todosProdutos += "Código: " + produtos[i].codigo;
        todosProdutos += "Nome: " + produtos[i].nome;
        todosProdutos += "Preço: " + produtos[i].preco;
        todosProdutos += "<br>";

    }
    res.send(todosProdutos)
});
*/

app.listen(PORT, () => {
    console.log("http://localhost:" + 3000);
});
