const fs = require("node:fs");

const text = fs.readFileSync("./txt.txt", "utf-8");
const text2 = fs.readFileSync("./nombres.txt", "utf-8");
console.log(text);
