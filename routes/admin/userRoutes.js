const express = require('express');
const router = express.Router();
const adminUserController = require('../../controller/admin/userController.js');


router.delete('/delete/:id', adminUserController.deleteUser);
router.put('/edit/:id', adminUserController.editUser);
router.get('/edit/:id', adminUserController.editUserPage);
router.post('/add', adminUserController.addUser);
router.get('/add', adminUserController.addUserPage);
router.get('/list', adminUserController.getAllUsers);

module.exports = router;

