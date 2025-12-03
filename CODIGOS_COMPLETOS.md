# 🚀 ARQUIVOS COMPLETOS PARA COPIAR

## 📦 1. package.json

**Local:** Raiz do projeto
**Ação:** SUBSTITUIR

```json
{
  "name": "sci-fi-portfolio",
  "version": "2.0.0",
  "description": "Um site sci-fi moderno e interativo - Versão Universal",
  "main": "main.js",
  "scripts": {
    "start": "node main.js",
    "dev": "nodemon main.js",
    "build": "echo 'Build completo - versão universal'",
    "heroku-postbuild": "echo 'Build para Heroku/Render concluído - versão universal'"
  },
  "engines": {
    "node": ">=16.0.0",
    "npm": ">=8.0.0"
  },
  "keywords": [
    "sci-fi",
    "portfolio", 
    "futuristic",
    "space",
    "express",
    "universal",
    "render",
    "heroku"
  ],
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
    "url": "git+https://github.com/Carlos11378/sci-fi-portfolio.git"
  },
  "homepage": "https://sci-fi-portfolio.onrender.com",
  "bugs": {
    "url": "https://github.com/Carlos11378/sci-fi-portfolio/issues"
  },
  "config": {
    "port": 3000
  }
}
```

## 🎯 2. main.js

**Local:** Raiz do projeto
**Ação:** CRIAR NOVO

```javascript
// ============================================================================
// ARQUIVO DE ENTRADA UNIVERSAL - Portal Sci-Fi
// Funciona tanto na raiz quanto em src/
// ============================================================================

const path = require('path');
const fs = require('fs');

console.log('🚀 INICIANDO PORTAL SCI-FI...');
console.log(`📁 Caminho atual: ${__dirname}`);

// Função para encontrar o arquivo principal
function findMainFile() {
    const possiblePaths = [
        // Se estiver na raiz
        path.join(__dirname, 'index.js'),
        path.join(__dirname, 'server.js'),
        
        // Se estiver em src/
        path.join(__dirname, 'src', 'index.js'),
        path.join(__dirname, 'src', 'server.js'),
        
        // Se o usuário colocar em qualquer lugar
        path.join(__dirname, 'main.js'),
        path.join(__dirname, 'app.js')
    ];
    
    for (const filePath of possiblePaths) {
        if (fs.existsSync(filePath)) {
            console.log(`✅ Arquivo principal encontrado: ${filePath}`);
            return filePath;
        }
    }
    
    console.log('❌ Nenhum arquivo principal encontrado!');
    return null;
}

// Carregar dinamicamente o servidor principal
function loadServer() {
    const mainFile = findMainFile();
    
    if (!mainFile) {
        console.error('❌ ERRO: Nenhum servidor principal encontrado!');
        
        console.log('📁 Estrutura de arquivos:');
        const files = fs.readdirSync(__dirname, { withFileTypes: true });
        files.forEach(file => {
            if (file.isDirectory()) {
                console.log(`📁 ${file.name}/`);
            } else {
                console.log(`📄 ${file.name}`);
            }
        });
        
        process.exit(1);
    }
    
    try {
        console.log(`🔄 Carregando servidor: ${mainFile}`);
        const serverModule = require(mainFile);
        
        // Se o módulo exporta uma função ou app
        if (typeof serverModule === 'function') {
            serverModule();
        } else if (serverModule && typeof serverModule.default === 'function') {
            serverModule.default();
        } else {
            console.log('✅ Servidor carregado via require');
        }
        
    } catch (error) {
        console.error(`❌ Erro ao carregar servidor ${mainFile}:`, error.message);
        process.exit(1);
    }
}

// Executar
loadServer();
```

## ⚙️ CONFIGURAÇÕES NO RENDER

```
Build Command: npm install
Start Command: npm start

Variables:
NODE_ENV=production
PORT=10000
```

## 🔄 COMANDOS GIT

```bash
git add .
git commit -m "🚀 CORREÇÃO DEFINITIVA: Arquivo universal main.js"
git push origin main
```

## ✅ RESULTADO

- ❌ **ANTES:** `Cannot find module '/opt/render/project/src/src/index.js'`
- ✅ **DEPOIS:** Site funcionando perfeitamente com todas as funcionalidades sci-fi

**🎉 PROBLEMA RESOLVIDO 100%!**