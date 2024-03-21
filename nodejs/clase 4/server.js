require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const { match } = require("assert");
const jwt = require("jsonwebtoken");

//bodyparser es middleware
//middleware
app.use(express.static("views"));
app.use(bodyParser.json());

//destructurarprocces.env
const { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, JWT_SECRET } =
  process.env;

//coneccion a base de datos
const pool = mysql.createPool({
  connectionLimit: 10,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split[""][1];
  console.log(token);

  if (token == null) {
    res.redirect(301, "/login");
    return;
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      res.redirect(301, "/login");
      return;
    }
    req.user = user;
    next();
  });
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});
//login
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
//postlogin?
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  pool.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) throw err;

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err2, match) => {
          if (err2) throw err2;
          if (match) {
            const token = jwt.sign({ name: result[0].username }, JWT_SECRET, {
              expiresIn: "20m",
            });

            res.json({ success: true, message: "login correcto", token });
          } else {
            //Password incorrecto
            res.status(404).send({
              success: false,
              message: "Tu usuario o contrasena es incorrecto",
            });
          }
        });
      } else {
        //databaseerror
        console.error("Erorr en la DB");
        res.status(404).send({
          success: false,
          message: "Tu usuario o contrasena es incorrecto",
        });
      }
    }
  );
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "views/signup.html"));
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "No se pudo crear el usuario" });
    }
    pool.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash],
      (err2, result) => {
        if (err2) {
          console.error(err2);
          return res
            .status(500)
            .json({ success: false, message: "No se pudo crear el usuario" });
        }
        res.json({ success: true, message: "usuario creado exitosamente" });
      }
    );
  });
});

app.get("/products", authenticateToken, (req, res) => {
  res.sendFile(path.join(__dirname, "views/products.html"));
});

app.get("/api/products", authenticateToken, (req, res) => {
  res.json({ products: { electronics: ["iphone", "Galaxy"] } });
});

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
