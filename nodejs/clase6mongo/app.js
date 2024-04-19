const mongoose = require("mongoose");
const express = require("express");

const app = express();
const port = 3001;

const url = "mongodb://127.0.01:27017";
const dbName = "users_example";

app.use(express.json());

mongoose.connect(url + "/" + dbName); //metodo para conectar a base de datos

const db = mongoose.connection; //metodo para permitir tener eventos, cuando conecto o genero error

db.on("error", (err) => console.error("Error en la conexion de la DB", err));
db.once("open", () => console.log("DB Connected Successfully"));

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send({ message: "User inserted correctly" });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: "user doesn't exist " });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).send();
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log("Server Running on port ", port);
});
