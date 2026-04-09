const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

// pública
router.post("/usuarios", createUser);

// protegidas
router.get("/usuarios", auth, getUsers);
router.put("/usuarios/:id", auth, updateUser);
router.delete("/usuarios/:id", auth, deleteUser);

module.exports = router;