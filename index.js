require("dotenv").config();
require("./config/db");

const express = require("express");
const path = require("path");
const statusRoutes = require("./routes/statusRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const logger = require("./middlewares/logger");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(logger);

app.use("/", statusRoutes);
app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/", uploadRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});