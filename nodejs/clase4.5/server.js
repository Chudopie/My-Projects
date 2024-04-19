require("dotenv").config();
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();

const { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, JWT_SECRET } =
  process.env;

app.use(express.static("views"));
app.use(bodyParser.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  let token = "";
  if (authHeader) {
    token = authHeader.split(" ")[1];

    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        console.log(err, "ERROR JWT");
        res.redirect(301, "/login");
        return;
      }
      req.user = user;
      next();
    });
  } else {
    res.redirect(301, "/login");
  }
};

app.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  pool.query(
    "SELECT  * FROM  users WHERE username = ?",
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
            res.status(404).send({
              success: false,
              message: "usuario no encontrado",
            });
          }
        });
      } else {
        console.error("Error en la DB");
        res.status(404).send({
          success: false,
          message: "Tu usuario o contrasenia es incorrecto",
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
      "INSERT INTO users (username, password) values (?, ?)",
      [username, hash],
      (err2, result) => {
        if (err2) {
          console.error(err2);
          return res
            .status(500)
            .json({ success: false, message: "No se pudo crear el usuario" });
        }

        res.json({ success: true, message: "Usuario creado exitosamente" });
      }
    );
  });
});

app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "views/products.html"));
});

app.get("/api/products", authenticateToken, (req, res) => {
  res.json({
    products: { electronicos: ["iphone", "galaxy", "zte"] },
    user: req.user.name,
  });
});

app.listen(PORT, () => {
  console.log("Running server on : ", PORT);
});
