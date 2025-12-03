import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ROTA PARA TESTAR O SERVIDOR
app.get("/", (req, res) => {
  res.send("Backend de Ficção Científica está funcionando!");
});

// ROTA PARA NOTÍCIAS
import { getNews } from "./news.js";

app.get("/news", async (req, res) => {
  try {
    const articles = await getNews();
    res.json({ articles });
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    res.status(500).json({ error: "Erro ao obter notícias" });
  }
});

// Porta do Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
