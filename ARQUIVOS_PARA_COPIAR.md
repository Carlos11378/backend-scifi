# 📋 ARQUIVOS PARA COPIAR NO GITHUB

## ⚠️ SUBSTITUA NO SEU REPOSITÓRIO OS SEGUINTES ARQUIVOS:

### 1. 📦 package.json (SUBSTITUIR)
**Caminho no GitHub:** `package.json`

**Conteúdo:**
```json
{
  "name": "sci-fi-portfolio",
  "version": "1.0.0",
  "description": "Um site sci-fi moderno e interativo",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "echo 'Build completo'",
    "heroku-postbuild": "echo 'Build para Heroku/Render concluído'"
  },
  "engines": {
    "node": "18.x",
    "npm": ">=6.0.0"
  },
  "keywords": ["sci-fi", "portfolio", "futuristic", "space"],
  "author": "MiniMax Agent",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/yourusername/sci-fi-portfolio.git"
  },
  "homepage": "https://sci-fi-portfolio.render.app"
}
```

### 2. 🚀 index.js (CRIAR/SUBSTITUIR)
**Caminho no GitHub:** `index.js` (na raiz do projeto)

**Conteúdo:**
```javascript
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
```

### 3. 📁 public/index.html (CRIAR)
**Caminho no GitHub:** `public/index.html`

### 4. 🎨 public/styles.css (CRIAR)
**Caminho no GitHub:** `public/styles.css`

### 5. ⚡ public/script.js (CRIAR)
**Caminho no GitHub:** `public/script.js`

---

## 🔄 PASSOS PARA ATUALIZAR:

1. **Copie cada arquivo acima**
2. **Cole no seu repositório GitHub** (substituindo o conteúdo atual)
3. **Commit e Push:**
   ```bash
   git add .
   git commit -m "🚀 CORREÇÃO: Estrutura corrigida para Render"
   git push origin main
   ```

## ✅ CONFIGURAÇÃO NO RENDER:

- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Variables:**
  - `NODE_ENV=production`
  - `PORT=10000`

## 🎯 RESULTADO:

Após o deploy, o erro "Cannot find module" estará resolvido e o site funcionará perfeitamente!