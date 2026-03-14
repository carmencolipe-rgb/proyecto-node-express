const express = require('express');
const router = express.Router();

const { home, status } = require('../controllers/statusController');

router.get('/', home);
router.get('/status', status);

module.exports = router;