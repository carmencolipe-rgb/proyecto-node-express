const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

router.get("/usuarios", getUsers);
router.post("/usuarios", createUser);
router.put("/usuarios/:id", updateUser);
router.delete("/usuarios/:id", deleteUser);

module.exports = router;