const fs = require("node:fs");

fs.readdir(".", (err, files) => {
  if (err) {
    console.log("Erro al leer el archivo: ", err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});
