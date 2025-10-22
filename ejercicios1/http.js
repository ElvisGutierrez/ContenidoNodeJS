//Importamos libreria de puertos
const http = require("node:http");
const { puertoDisponible } = require("./puertoAuto.js");

/* console.log(process.env); */

//Solicitamos el puerto y por defecto el 3000
const elegirPuerto = process.env.PORT ?? 3000;

//Creacion del servidor
const server = http.createServer((req, res) => {
  console.log("Peticion recivida");
  res.end("Hola mundo");
});

//Seleccion ndel puerto que levantara el servidor
puertoDisponible(elegirPuerto).then((puerto) => {
  server.listen(puerto, () => {
    console.log(`Server escuchando en el puerto: http://localhost:${puerto}`);
  });
});
