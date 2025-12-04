// news.js
import fetch from "node-fetch";

const NEWSAPI_KEY = process.env.NEWSAPI_KEY || ""; // coloque sua chave no .env

export async function getNews(category = "") {
  try {
    const q = category ? encodeURIComponent(category) : "";
    // Top headlines em português (ajuste pageSize se quiser)
    let url = `https://newsapi.org/v2/top-headlines?language=pt&pageSize=12&apiKey=${NEWSAPI_KEY}`;

    if (q) {
      url += `&q=${q}`;
    } else {
      // fallback opcional para manter conteúdo tech/sci-fi
      url += `&category=technology`;
    }

    const resp = await fetch(url);
    if (!resp.ok) {
      console.error("NewsAPI retornou não-ok:", resp.status, resp.statusText);
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
