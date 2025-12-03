const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

console.log('🚀 Iniciando Portal Sci-Fi...');
console.log(`📁 Diretório atual: ${__dirname}`);

// Configurar middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'public', 'index.html');
    console.log(`📄 Carregando: ${indexPath}`);
    
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error('❌ Erro ao carregar index.html:', err);
            res.status(500).send('Erro ao carregar a página');
        }
    });
});

// API endpoints
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        message: 'Portal Sci-Fi está funcionando!',
        timestamp: new Date().toISOString(),
        port: PORT,
        nodeVersion: process.version,
        directory: __dirname,
        publicPath: path.join(__dirname, 'public')
    });
});

// Rota para arquivos estáticos específicos
app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'styles.css'));
});

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'script.js'));
});

// Rota de fallback para todas as outras solicitações
app.get('*', (req, res) => {
    console.log(`🔄 Fallback para: ${req.path}`);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Tratamento de erros
app.use((err, req, res, next) => {
    console.error('❌ Erro no servidor:', err.stack);
    res.status(500).json({
        error: 'Erro interno do servidor',
        message: 'Portal em manutenção',
        timestamp: new Date().toISOString()
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🎯 Servidor iniciado com sucesso!`);
    console.log(`🚀 Portal Sci-Fi rodando na porta ${PORT}`);
    console.log(`🌌 Acesse: http://localhost:${PORT}`);
    console.log(`📁 Caminho dos arquivos: ${path.join(__dirname, 'public')}`);
    console.log(`✅ Ready for deploy!`);
});

// Exportar app para testes
module.exports = app;