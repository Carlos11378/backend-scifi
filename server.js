// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getNews } from "./news.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ROTA PARA TESTAR O SERVIDOR
app.get("/", (req, res) => {
  res.send("Backend de Ficção Científica está funcionando!");
});

// ROTA LEGADA (compatibilidade)
app.get("/news", async (req, res) => {
  try {
    const category = req.query.category || "";
    const articles = await getNews(category);
    res.json({ success: true, data: { articles } });
  } catch (error) {
    console.error("Erro ao buscar notícias (legacy):", error);
    res.status(500).json({ success: false, error: "Erro ao obter notícias" });
  }
});

// ROTA QUE O FRONT-END USA (/api/news)
app.get("/api/news", async (req, res) => {
  try {
    const category = req.query.category || "";
    const articles = await getNews(category);
    res.json({ success: true, data: { articles } });
  } catch (error) {
    console.error("Erro ao buscar notícias (/api/news):", error);
    res.status(500).json({ success: false, error: "Erro ao obter notícias" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));


