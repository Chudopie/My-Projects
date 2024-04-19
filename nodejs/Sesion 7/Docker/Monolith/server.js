//Va a contener toda la logica del front y del back
//Servidor express
//Axios es para las solicitudes sin usar el fetch
//EJS no se necesita indicar como los primeros const 

const { default: axios } = require('axios')
const express = require('express')
const app = express()
const path = require('path')
const PORT = 3005

const books = [
  {title: "Harry Potter y la piedra filosofal", author:"JK Rowling", year: 2005},
  {title: "Harry Potter y el prisionero de azkabhan", author:"JK Rowling", year: 2006},
  {title: "Harry Potter y el niño curseado", author:"JK Rowling", year: 2007},
]

app.use(express.static('public'))
app.use('views', path.join(__dirname, "public/views"))
app.set('view engine', 'ejs')

app.get("/", async (req, res)=>{
  let url = "http://microservicio:3005/api/productos"

  try {
    const microserviceResponce = await axios.get(url)
    let data = microserviceResponce.data
    res.render('index', {books, data})
  }
  catch(err) {
    res.json({message:`error: ${err.message}`})
  }

  res.render('index', {books})
})

app.listen(PORT, ()=>{
  console.log("Server is running on port", PORT)
})

