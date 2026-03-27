require('dotenv').config();
require('./config/db');

const express = require('express');
const statusRoutes = require('./routes/statusRoutes');
const userRoutes = require('./routes/userRoutes'); // 👈 NUEVO
const logger = require('./middlewares/logger');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use(logger);

app.use('/', statusRoutes);
app.use('/', userRoutes); // 👈 NUEVO

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});