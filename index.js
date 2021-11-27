const express = require("express");
const path = require("path");

const app = express();
const router = express.Router();
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(index.html);
});

app.get("/contact", (req, res) => {
  res.sendFile(publicPath + "/contact.html");
});

app.get("/about", (req, res) => {
  res.sendFile(publicPath + "/about.html");
});

app.get("/*", (req, res) => {
  res.sendFile(publicPath + "/404.html");
});

app.listen(process.env.PORT || 3000);
