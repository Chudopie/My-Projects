require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3001;

//ROUTES;

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "hello_sql",
});

app.get("/api/poke", (req, res) => {
  res.send("TODAS LOS POKES");
});

app.listen(port, () => {
  console.log("Server is running on: ", port);
});
