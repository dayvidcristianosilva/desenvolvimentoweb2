const https = require('https');
const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const queryObject = url.parse(req.url, true).query;
    const data = queryObject.date || '';

    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=LpcINkjbrL486Jbqu3YSC5WXn4D3zJiYL5vZ2gxU&date=${data}`;

    https.get(apiUrl, (resp) => {
        let dados = '';

        resp.on('data', (chunk) => {
            dados += chunk;
        });

        resp.on('end', () => {
            const respostaJSON = JSON.parse(dados);
            const titulo = respostaJSON.title;
            const explicacao = respostaJSON.explanation;
            const imagemUrl = respostaJSON.url;

            res.write('<h1>' + titulo + '</h1>');
            res.write('<p>' + explicacao + '</p>');
            res.write('<img src="' + imagemUrl + '" alt="Imagem da NASA">');
            res.end();
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}).listen(8080);

console.log('Servidor rodando em http://localhost:8080');
