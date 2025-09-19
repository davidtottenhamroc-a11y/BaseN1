const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Configura o Express para servir todos os arquivos estáticos
// do diretório onde o server.js está localizado.
// Isso inclui todos os seus arquivos HTML, CSS e JS.
app.use(express.static(path.join(__dirname, '/')));

// A rota principal (/) serve o arquivo menu.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'menu.html'));
});

// A rota Catch-all para lidar com 404s, caso a rota não exista
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
