const express = require("express");
const app = express();
const path = require("path");
const PORT = 3005;
const axios = require("axios");

const books = [
  {
    title: "Harry potter y la piedra filosofal",
    author: "JK Rowling",
    year: 2001,
  },
  {
    title: "Harry potter y el prisionero de azkaban",
    author: "JK Rowling",
    year: 2003,
  },
  {
    title: "Harry potter y el caliz de fuego",
    author: "JK Rowling",
    year: 2005,
  },
];

app.use(express.static("public"));
app.set("views", path.join(__dirname, "public/views"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  let url = "http://microservicio:3005/api/productos";

  try {
    const microserviceResponse = await axios.get(url);
    let data = microserviceResponse.data;

    res.render("index", { books, data });
  } catch (err) {
    res.json({ message: `error ${err.message}` });
  }

  res.render("index", { books });
});

app.listen(PORT, () => {
  console.log("Server monolithic is running on port ", PORT);
});
