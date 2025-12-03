import fetch from "node-fetch";

export async function getNews() {
  const API_KEY = process.env.NEWS_API_KEY;

  if (!API_KEY) {
    throw new Error("NEWS_API_KEY não está definida no ambiente!");
  }

  const url =
    `https://newsapi.org/v2/everything?q=science%20fiction&language=pt&sortBy=publishedAt&apiKey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.articles || [];
}
