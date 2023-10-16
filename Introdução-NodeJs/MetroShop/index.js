const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Bem vindx ao MetroShop!')
});

produtos = [
    { codigo: 1, nome: 'Fone de Ouvido', preco: 219.56 },
    { codigo: 2, nome: 'Caneca', preco: 7.12 },
    { codigo: 3, nome: 'Mochila', preco: 120 }];

app.get('/produtos', (req, res) => {
    res.send(produtos)
});

app.listen(PORT, () => {
    console.log("http://localhost:" + 3000);
});
