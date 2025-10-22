const fs = require("node:fs");

const stats = fs.statSync("./txt.txt");

console.log(
  stats.isFile(), //si es un archivo
  stats.isDirectory(), //si es un directorio
  stats.size //tamaño del archivo
);
