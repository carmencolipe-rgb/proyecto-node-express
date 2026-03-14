exports.home = (req, res) => {
  res.send("<h1>Servidor funcionando correctamente</h1>");
};

exports.status = (req, res) => {
  res.json({
    status: "Servidor activo"
  });
};