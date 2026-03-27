const db = require("../config/db");

// GET /usuarios
const getUsers = (req, res) => {
  db.query("SELECT id, nombre, email FROM usuarios", (err, results) => {
    if (err) {
      return res.status(500).json({
        mensaje: "Error al obtener usuarios",
        error: err.message
      });
    }

    res.status(200).json(results);
  });
};

// POST /usuarios
const createUser = (req, res) => {
  const { nombre, email, password } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).json({
      mensaje: "Nombre, email y password son obligatorios"
    });
  }

  db.query(
    "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)",
    [nombre, email, password],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          mensaje: "Error al crear usuario",
          error: err.message
        });
      }

      res.status(201).json({
        mensaje: "Usuario creado correctamente",
        id: result.insertId
      });
    }
  );
};

// PUT /usuarios/:id
const updateUser = (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;

  if (!nombre && !email) {
    return res.status(400).json({
      mensaje: "Debes enviar al menos nombre o email"
    });
  }

  db.query("SELECT * FROM usuarios WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).json({
        mensaje: "Error al buscar usuario",
        error: err.message
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado"
      });
    }

    const usuarioActual = results[0];
    const nuevoNombre = nombre || usuarioActual.nombre;
    const nuevoEmail = email || usuarioActual.email;

    db.query(
      "UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?",
      [nuevoNombre, nuevoEmail, id],
      (err2) => {
        if (err2) {
          return res.status(500).json({
            mensaje: "Error al actualizar usuario",
            error: err2.message
          });
        }

        res.status(200).json({
          mensaje: "Usuario actualizado correctamente"
        });
      }
    );
  });
};

// DELETE /usuarios/:id
const deleteUser = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM usuarios WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).json({
        mensaje: "Error al buscar usuario",
        error: err.message
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado"
      });
    }

    db.query("DELETE FROM usuarios WHERE id = ?", [id], (err2) => {
      if (err2) {
        return res.status(500).json({
          mensaje: "Error al eliminar usuario",
          error: err2.message
        });
      }

      res.status(200).json({
        mensaje: "Usuario eliminado correctamente"
      });
    });
  });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};