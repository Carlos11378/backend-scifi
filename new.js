const axios = require("axios");

module.exports = async function getNews() {
  return [
    {
      title: "Descoberta nova exolua fora do sistema solar",
      link: "https://example.com/noticia1"
    },
    {
      title: "Cientistas criam protótipo de motor quântico",
      link: "https://example.com/noticia2"
    }
  ];
};
