const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

router.get('/catalog', mainController.catalog)


router.post('/login', mainController.login)

router.post('/register', mainController.register)

router.get('/users', mainController.getAllUsers)




module.exports = router;