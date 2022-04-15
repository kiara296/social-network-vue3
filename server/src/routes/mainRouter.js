const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/catalog', mainController.catalog)

router.post('/register', mainController.register)

module.exports = router;