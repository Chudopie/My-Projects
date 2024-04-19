const express = require("express");

const app = express();
const PORT = 3005;
app.listen(PORT, () => {
  console.log("Server Microservice is running on port", PORT);
});

app.get("/api/productos", (req, res) => {
  res.json({
    data: [
      { producto: "t-shirts", quantity: 130 },
      { producto: "Tazas", quantity: 32 },
    ],
  });
});
