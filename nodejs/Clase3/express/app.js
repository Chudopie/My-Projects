const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("");

app.listen(PORT, () => {
  console.log(`El servidor esta escuchando en el puerto: ${PORT}...`);
});
