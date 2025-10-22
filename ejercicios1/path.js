const path = require("node:path");

console.log(path.sep);

const filepath = path.join("hola", "quetal", "estas");

console.log(filepath);

let base;
console.log((base = path.basename("/tmp/aja/ola/nombrearchivo.txt")));
console.log((base = path.basename("/tmp/aja/ola/nombrearchivo.txt", ".txt")));
console.log((base = path.basename("/tmp/aja/ola/nombrearchivo.txt", ".txt")));
const ruta = path.resolve("carpeta", "archivo.txt");
console.log(ruta);
// C:\Users\...\carpeta\archivo.txt   (Windows)
