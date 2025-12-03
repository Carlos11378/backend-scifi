# 🚀 Portal Sci-Fi - Projeto Futurista

Um site sci-fi moderno e interativo criado com Node.js, HTML5, CSS3 e JavaScript ES6+.

## 📁 Estrutura do Projeto

```
sci-fi-portfolio/
├── src/
│   └── index.js          # Servidor Node.js principal
├── public/
│   ├── index.html        # Página principal
│   ├── styles.css        # Estilos sci-fi
│   └── script.js         # Funcionalidades JavaScript
├── package.json          # Configurações do projeto
└── README.md            # Este arquivo
```

## 🔧 Configuração no Render

### 1. Configurações do Build e Deploy

- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Node.js Version**: 18.x ou superior

### 2. Variáveis de Ambiente

No painel do Render, adicione:

```
NODE_ENV=production
PORT=10000
```

### 3. Configurações do Servidor

O servidor está configurado para:
- Porta padrão: 3000 (Render definirá automaticamente)
- Servir arquivos estáticos da pasta `public/`
- API endpoint em `/api/status`

## 🎨 Características do Site

### Visual Sci-Fi
- ✨ Sistema de partículas interativas
- 🌟 Efeito glitch no título principal
- 🚀 Gradientes neon (ciano e magenta)
- 💫 Animações fluidas e responsivas
- 🎯 Interface futurista com efeitos de glow

### Funcionalidades
- 📱 Design totalmente responsivo
- 🖱️ Navegação suave entre seções
- 📧 Formulário de contato funcional
- 🔌 API endpoint para status
- ⚡ Sistema de validação em tempo real

### Seções
1. **Hero**: Apresentação principal com efeitos visuais
2. **Sobre**: Cards com tecnologias sci-fi
3. **Projetos**: Galeria de projetos futuristas
4. **Contato**: Formulário interativo

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Executar em produção
npm start
```

## 📦 Dependências

- **express**: Framework web para Node.js
- **path**: Módulo nativo para manipulação de caminhos

### Dependências de Desenvolvimento
- **nodemon**: Reinicialização automática do servidor

## 🌐 Endpoints da API

- `GET /` - Página principal
- `GET /api/status` - Status do servidor

## 🎨 Paleta de Cores

- **Primária**: #00ffff (Ciano)
- **Secundária**: #ff00ff (Magenta)
- **Destaque**: #ffff00 (Amarelo)
- **Fundo**: #0a0a0a (Preto profundo)

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- 💻 Desktop (1200px+)
- 📱 Tablet (768px - 1199px)
- 📱 Mobile (320px - 767px)

## 🔧 Solução de Problemas

### Erro: "Cannot find module"
- Verifique se o arquivo `src/index.js` existe
- Confirme que o `package.json` tem o caminho correto no campo `main`

### Erro: "Port already in use"
- O Render definirá automaticamente a porta
- Para local, altere a variável PORT no .env

### Site não carrega
- Verifique se o Build Command foi executado
- Confirme se o Start Command está correto

## 🎯 Próximos Passos

1. Faça commit de todos os arquivos
2. Push para o repositório GitHub
3. Conecte o repositório ao Render
4. Configure as variáveis de ambiente
5. Deploy automático!

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs no painel do Render
2. Confirme se todas as variáveis estão configuradas
3. Teste localmente antes de fazer deploy

---

**Criado por MiniMax Agent** 🤖