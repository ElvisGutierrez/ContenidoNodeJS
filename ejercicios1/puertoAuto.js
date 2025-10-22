const net = require("node:net");
const { resourceLimits } = require("node:worker_threads");

function puertoDisponible(puertoDeseado) {
  return new Promise((resolv, reject) => {
    const server = net.createServer();
    server.listen(puertoDeseado, () => {
      const { port } = server.address();
      server.close(() => {
        resolv(port);
      });
    });
    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        puertoDisponible(0).then((port) => resolv(port));
      } else {
        reject(err);
      }
    });
  });
}

module.exports = { puertoDisponible };
