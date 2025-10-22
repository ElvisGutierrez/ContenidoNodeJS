//crear servidor http con express
//Importar modulos necesarios
const express = require("express");
const ditto = require("./pokemon/ditto.json");

//definir el puerto del servidor
const PORT = process.env.PORT ?? 3000;

//Crear la aplicacion de express
const app = express();
app.disable("x-powered-by");

//Habilitar middleware para JSON
app.use(express.json());

//Crear ruta GET
app.get("/pokemon/ditto", (req, res) => {
  res.json(ditto);
});

//Crear ruta POST
app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

//Manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).send("<h1>Erro: Recurso no encontrado</h1>");
});

//Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
