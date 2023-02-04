const express = require("express");
// const axios = require("axios");
// const cheerio = require("cheerio");
const Crawler = require("crawler");
require("dotenv").config();

const app = express();

app.get("/", async (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
