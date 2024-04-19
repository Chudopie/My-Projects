const express = require("express");
const app = express();
const port = 3002;
//ENDPOINTS
//middleware
app.use(express.json()); // body en los request
//mock data
async function fetchUser(userID) {
  return { id: userID, name: "John Doe", email: "john@example.com" };
}

app.get("user/:id", async (req, res) => {
  try {
    const user = await fetchUser(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = app;
