const express = require("express");
const newsController = require("../controllers/newsController");

//why do we use express.Router???
const router = express.Router();

router.get("/api", newsController.getNewsInfo, (req, res) => {
  res.status(200).json(res.locals.news);
});

module.exports = router;
