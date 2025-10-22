const os = require("node:os");

console.log("Hola");
console.log("Uptime", os.uptime() / 60 / 60);
