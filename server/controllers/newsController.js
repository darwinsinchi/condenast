const fetch = require("node-fetch");

const newsController = {};
newsController.getNewsInfo = async (req, res, next) => {
  let response = await fetch("https://swapi.dev/api/people/?page=3");
  let data = await response.json();
  console.log(data);
  res.locals.news = data;
  next();
};

module.exports = newsController;
