const express = require("express");
const cors = require("cors");
const news = require("./news");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend funcionando — Sci-Fi News API ✔️");
});

app.get("/news", async (req, res) => {
  const items = await news();
  res.json(items);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
