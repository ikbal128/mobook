const express = require('express');
const router = express.Router();
const adminUserController = require('../../controller/admin/userController.js');

router.get('/list', adminUserController.getAllUsers);

module.exports = router;

