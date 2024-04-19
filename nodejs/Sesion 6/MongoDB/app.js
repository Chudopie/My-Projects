const mongoose = require('mongoose')
const express = require('express')

const app = express()
const PORT = 3001

const url = "mongodb://localhost:27017"
const dbName = "users_example"


app.use(express.json())//Midleware para poder leer los post sin tener que usar bodyparser

mongoose.connect(url + "/" + dbName)

const db = mongoose.connection;

//Parecido a un callback o evenlistener
db.on("error", (err) => console.error("Error en la conexion de la DB", err)) //Que tipo de evento vamos a validar
db.once('open', ()=> {
    console.log("DB connected successfully")
})

const userSchema = new mongoose.Schema({
    name:String,
    age:Number, 
    email:String
})

const User = mongoose.model('User', userSchema) //El primero es el modelo que se va a crear ('User')
//El segundo son los campos que va a ir llenando ('userSchema')

//Como pueden ser muchas consultas debemos de usar una funcion asincrono para no demorarse
//En este caso en vez de usar un await para que no se tarde y cheque cosa por cosa, se usara un try-catch
app.get('/users', async(req, res) => {
    try {
      const users = await User.find() //Modelo .find busca todos los usuarios del modelo de arriba
      res.send(users)
    }
    catch {
      res.status(500).send(err)
    }
})

app.post('/users', async (req, res)=>{
    const user = new User(req.body)
    try {
      await user.save()
      res.status(201).send({message:"User inserted correctly"})//Puedo poner el mensaje que yo quiera
    }
    catch {
      res.status(500).send(err)
    }
})

app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (user) {
      res.send(user)
    } else {
      res.status(404).send({message: "user doesn't exist"})
    }
  }
  catch {
    res.status(500).send(err)
  }
})

app.patch('/users/:id', async(req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(!user) {
      return res.status(404).send()
    } else {
      res.send(user)
    }
  }
  catch {
    res.status(400).send(err)
  }
})

app.listen(PORT, ()=> {
    console.log("Conectado en el puerto", PORT)
})
