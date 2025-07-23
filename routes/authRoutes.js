const express = require('express');
const router = express.Router();
const authController = require('../controller/authController.js');

router.get('/logout', authController.logout);
router.get('/login', authController.getLoginPage);
router.post('/login', authController.login);
router.get('/register', authController.getRegisterPage);

module.exports = router;