import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ROTA PRINCIPAL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ROTA DE STATUS
app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'online', 
    message: 'Portal Sci-Fi funcionando!',
    platform: 'Vercel',
    timestamp: new Date().toISOString()
  });
});

// FUNÇÃO PARA BUSCAR NOTÍCIAS
async function getNews(category = '') {
  try {
    const apiKey = process.env.GNEWS_API_KEY;
    
    if (!apiKey) {
      console.error('❌ GNEWS_API_KEY não encontrada!');
      return [];
    }

    console.log('✅ API Key carregada');
    
    const q = category ? encodeURIComponent(category) : 'tecnologia';
    const url = `https://gnews.io/api/v4/search?q=${q}&lang=pt&max=12&apikey=${apiKey}`;
    
    console.log('🔍 Buscando notícias:', q);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('❌ Erro na API:', response.status, response.statusText);
      return [];
    }
    
    const data = await response.json();
    
    const articles = (data.articles || []).map(article => ({
      title: article.title || '',
      description: article.description || '',
      url: article.url || '',
      publishedAt: article.publishedAt || '',
      source: article.source || { name: 'Desconhecido' },
      image: article.image || ''
    }));
    
    console.log('✅ Notícias encontradas:', articles.length);
    
    return articles;
    
  } catch (error) {
    console.error('❌ Erro ao buscar notícias:', error);
    return [];
  }
}

// ROTA DE NOTÍCIAS - /api/news
app.get('/api/news', async (req, res) => {
  try {
    const category = req.query.category || '';
    const articles = await getNews(category);
    
    res.json({ 
      success: true, 
      data: { 
        articles,
        total: articles.length
      } 
    });
    
  } catch (error) {
    console.error('❌ Erro na rota /api/news:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Erro ao buscar notícias',
      message: error.message 
    });
  }
});

// ROTA LEGADA - /news (para compatibilidade)
app.get('/news', async (req, res) => {
  try {
    const category = req.query.category || '';
    const articles = await getNews(category);
    
    res.json({ 
      success: true, 
      data: { articles } 
    });
    
  } catch (error) {
    console.error('❌ Erro na rota /news:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Erro ao buscar notícias' 
    });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║   🚀 SERVIDOR RODANDO COM SUCESSO     ║
╠════════════════════════════════════════╣
║   Porta: ${PORT}                        
║   URL: http://localhost:${PORT}        
║   API: http://localhost:${PORT}/api/news
╚════════════════════════════════════════╝
  `);
});

export default app;
