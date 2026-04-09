const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      mensaje: "No se recibió ningún archivo"
    });
  }

  return res.status(200).json({
    mensaje: "Archivo subido correctamente",
    archivo: req.file.filename,
    ruta: `/uploads/${req.file.filename}`,
    tipo: req.file.mimetype,
    tamaño: req.file.size
  });
};

module.exports = { uploadFile };