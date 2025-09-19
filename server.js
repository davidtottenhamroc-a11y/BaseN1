const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve os arquivos estáticos (HTML, CSS, JS) da pasta atual
app.use(express.static(__dirname));

// Rota principal para a página inicial (menu.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'menu.html'));
});

// Rota para cada arquivo HTML
app.get('/guia_atendimento', (req, res) => {
    res.sendFile(path.join(__dirname, 'guia_atendimento.html'));
});

app.get('/desligamento', (req, res) => {
    res.sendFile(path.join(__dirname, 'desligamento.html'));
});

app.get('/abertura', (req, res) => {
    res.sendFile(path.join(__dirname, 'abertura.html'));
});

app.get('/troca_de_placa', (req, res) => {
    res.sendFile(path.join(__dirname, 'troca_de_placa.html'));
});

app.get('/capiturador', (req, res) => {
    res.sendFile(path.join(__dirname, 'capiturador.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});