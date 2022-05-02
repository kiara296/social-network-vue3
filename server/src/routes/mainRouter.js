const express = require('express');
const router = express.Router();
const multer = require("multer")
const upload = multer({ dest: "../../public" })
const mainController = require('../controllers/mainController.js');


router.get('/catalog', mainController.catalog)

router.post('/login', mainController.login)

router.post('/register',upload.single('profileImage'), mainController.register)

router.get('/users', mainController.getAllUsers)




module.exports = router;