const fs = require('fs');

function logger(req, res, next) {

  const fecha = new Date().toLocaleString();

  const log = `Acceso: ${fecha} - Ruta: ${req.url}\n`;

  fs.appendFileSync('./logs/log.txt', log);

  next();
}

module.exports = logger;