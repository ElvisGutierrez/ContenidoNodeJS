//Importamos libreria de puertos
const http = require("node:http");

/* console.log(process.env); */

//Solicitamos el puerto y por defecto el 3000
const elegirPuerto = process.env.PORT ?? 1234;

//Creacion del servidor
const server = http.createServer((req, res) => {
  console.log("Peticion recivida", req.url);
  res.end("Hola mundo");
});

//Seleccion ndel puerto que levantara el servidor

server.listen(elegirPuerto, () => {
  console.log(
    `Server escuchando en el puerto: http://localhost:${elegirPuerto}`
  );
});
