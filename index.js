require('dotenv').config();

const express = require('express');
const statusRoutes = require('./routes/statusRoutes');
const logger = require('./middlewares/logger');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use(logger);

app.use('/', statusRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});