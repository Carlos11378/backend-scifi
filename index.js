// =======================================================
// SERVIDOR SIMPLES PARA VERCEL - APROVAÇÃO GARANTIDA
// =======================================================

const express = require('express');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());

// Servir arquivos estáticos
app.use('/static', express.static('public'));

// API simples
app.get('/api/status', (req, res) => {
    res.json({ 
        status: 'online', 
        message: 'Portal Sci-Fi funcionando!',
        platform: 'Vercel'
    });
});

// Páginas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Exportar app
module.exports = app;
