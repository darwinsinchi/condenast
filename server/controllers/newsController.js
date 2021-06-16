const fetch = require("node-fetch");

const newsController = {};
newsController.getNewsInfo = async (req, res, next) => {
  let response = await fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2021-05-16&sortBy=publishedAt&apiKey=ab1dacecea3941b4b4e66bb62e774a68"
  );
  let data = await response.json();
  console.log(data);
  res.locals.news = data;
  next();
};

module.exports = newsController;
