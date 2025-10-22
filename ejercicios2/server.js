const express = require("express");
const api = require("./pokemon/ditto.json");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/pokemon", (req, res) => {
  res.json(api);
});

app.post("/pokemon/add", (req, res) => {
  res.status(201).json(req.body);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el http://localhost:${PORT}`);
});
