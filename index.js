const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar middleware
app.use(express.static('public'));
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// API endpoints (pode adicionar suas rotas aqui)
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        message: 'Site Sci-fi está funcionando!',
        timestamp: new Date().toISOString()
    });
});

// Tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Erro interno do servidor',
        message: 'Site em manutenção'
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor Sci-fi iniciado na porta ${PORT}`);
    console.log(`🌌 Acesse: http://localhost:${PORT}`);
    console.log(`⚡ Site Sci-fi está online!`);
});

// Exportar app para testes
module.exports = app;