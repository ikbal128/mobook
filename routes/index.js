const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes.js');
const adminHomeController = require('../controller/admin/homeController.js');
const adminUserRoutes  = require('./admin/userRoutes.js');

router.use('/auth', authRoutes);

//routes admin

router.get('/adminHome', adminHomeController.getHomePage);
router.use('/adminUser', adminUserRoutes);

//routes client

router.get(`/`, (req, res) => {
    res.redirect(`/auth/login`)
})

module.exports = router;