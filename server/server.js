const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./routes/api");

//middleware
app.use(cors());
//below lets us get access to req.body
app.use(express.json());

//ROUTE//

app.get("/api", apiRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/js/app.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/js/app.js"));
});

// app.use("/public", express.static(path.join(__dirname, "../public")));

app.use((req, res) => res.sendStatus(404));

app.listen(3000, () => {
  console.log("server has started on port 3000!");
});
