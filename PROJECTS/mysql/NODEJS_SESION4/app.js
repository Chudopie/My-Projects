const mysql = require("mysql2");
const sqlKey = require("./secretss.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); //pasapporte

//EXPRESS
const app = express();

app.use(bodyParser.json());
app.use(cors()); //pasaporte

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: sqlKey,
  database: "hello_sql",
});
//callback
//conexion
database.connect((err) => {
  if (err) {
    console.error("Error conectando to MySql", err);
  } else {
    console.log("Conectado! a MySql");
  }
});

//descripcion de pokes
//bulbasaur todo
app.get(`/getpokemons/:id`, (req, res) => {
  const solicitud = `select * from pokeusers where pokeid =${req.params.id}`;

  database.query(solicitud, (err, result) => {
    if (err) {
      console.error("Error excecuting the query:", err.message);
      res.status(500).send("Algo salio mal..");
    } else {
      res.json(result);
    }
  });
});

//llamada a IDS

app.get("/getpokemonsnames", (req, res) => {
  const solicitud = `select pokename from pokeusers where pokeid between "1" and "151"`;

  database.query(solicitud, (err, result) => {
    if (err) {
      console.error("Error excecuting the query:", err.message);
      res.status(500).send("Algo salio mal..");
    } else {
      res.json(result);
    }
  });
});

//Pokes del 1 al 30
//1 bulbasaur
app.get("/getpokemons", (req, res) => {
  const solicitud = `SELECT distinct pokename from pokeusers where pokename = "bulbasaur"`;

  database.query(solicitud, (err, result) => {
    if (err) {
      console.error("Error excecuting the query:", err.message);
      res.status(500).send("Algo salio mal..");
    } else {
      res.json(result);
    }
  });
});
//2  ivysaur
app.get("/getpokemons1", (req, res) => {
  const solicitud = `SELECT distinct pokename from pokeusers where pokename = " Ivysaur"`;

  database.query(solicitud, (err, result) => {
    if (err) {
      console.error("Error excecuting the query:", err.message);
      res.status(500).send("Algo salio mal..");
    } else {
      res.json(result);
    }
  });
});

///POST para agregar o guardar un pokemon
app.post("/addpoke", (req, res) => {
  //object distroctoring
  const {
    pokeid,
    pokename,
    poketype,
    pokepower1,
    pokepower2,
    ataque,
    defensa,
    vida,
    velocidad,
    debilidad,
    evolucion,
  } = req.body;
  console.log(req.body);
  const solicitud = `insert into pokeusers (pokeid,pokename,poketype,pokepower1, pokepower2,ataque,defensa,vida,velocidad,debilidad,evolucion) VALUES(
        ${pokeid},"${pokename}","${poketype}","${pokepower1}","${pokepower2}",${ataque},${defensa},${vida},${velocidad},"${debilidad}",${evolucion}
        )`;
  database.query(solicitud, (err, result) => {
    if (err) {
      console.error("Error excecuting the query:", err.message);
      res.status(500).send("Algo salio mal..");
    } else {
      res.json(result);
    }
  });
});

//listen ayuda a escuchar el servidor puerto 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//localhost:3000/getpoke/50
//con este puedo ver uno por uno con este

app.get("/getpoke/:id", (req, res) => {
  const pokeid = parseInt(req.params.id);
  console.log(pokeid);
  const sql = `select * from pokeusers where pokeid = ${pokeid}`;

  database.query(sql, (err, result) => {
    if (err) {
      console.error("Error excecuting the query:", err.message);
      res.status(500).send("Algo salio mal..");
    } else {
      res.json(result);
    }
  });
});

//se hace el query o solicitud de la database
//comando mysql
// const solicitud = "SELECT * FROM pokeusers limit 10;";

// database.query(solicitud, (err, result) => {
//   if (err) {
//     console.error("Error excecuting the query:", err.message);
//   } else {
//     console.log(result);
//   }
// });
//npx nodemon app.js
//npm i cors para el puerto pasaporte

/*hacer mas querys*/
