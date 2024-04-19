const express = require('express')
const mysql = require('mysql2')

const app = express()
const PORT = 3005

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,

});

app.get("/api/data", (req, res)=> {
    res.json({
        data: [
            {producto: "t-shirt", quantity: 130},
            {producto: "tazas", quantity: 32},
        ],
    });
});

app.get

app.listen(PORT, ()=> {
    console.log("Microservice is running on port", PORT)
})