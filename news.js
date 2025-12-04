// news.js
import fetch from "node-fetch";

const GNEWS_API_KEY = process.env.GNEWS_API_KEY || "";

export async function getNews(category = "") {
  try {
    console.log("API KEY:", GNEWS_API_KEY ? "Carregada ✓" : "VAZIA ✗");
    
    const q = category ? encodeURIComponent(category) : "tecnologia";
    const url = `https://gnews.io/api/v4/search?q=${q}&lang=pt&max=12&apikey=${GNEWS_API_KEY}`;

    const resp = await fetch(url);
    if (!resp.ok) {
      console.error("GNews retornou erro:", resp.status, resp.statusText);
      return [];
    }

    const json = await resp.json();

    const articles = (json.articles || []).map(a => ({
      title: a.title || "",
      description: a.description || "",
      url: a.url || "",
      publishedAt: a.publishedAt || ""
    }));

    return articles;
  } catch (err) {
    console.error("Erro getNews:", err);
    return [];
  }
}
