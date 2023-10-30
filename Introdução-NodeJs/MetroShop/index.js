const express = require('express');
const app = express();
app.use(express.static('public'));
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Bem vindx ao MetroShop!')
});

produtos = [
    { codigo: 1, nome: 'Fone de Ouvido', preco: 10.0 },
    { codigo: 2, nome: 'Faca da Ana Maria Braga', preco: 5.0 },
    { codigo: 3, nome: 'Sonzinho da JBL', preco: 20 }];

app.get('/produtos', (req, res) => {

    var nomeFiltro = req.query.nome;
    var precoMaximo = req.query.preco;

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

app.listen(PORT, () => {
    console.log("http://localhost:" + 3000);
});
