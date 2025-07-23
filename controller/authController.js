const User = require('../models/User.js');
const bcrypt = require('bcrypt');

module.exports = {
    getLoginPage: (req, res) => {
        res.render('login', {error: null});
    },
    login: async (req, res) => {
        const {username, password}= req.body;
        try {
            const user = await User.findOne({username});
            const match = await bcrypt.compare(password, user.password);

            if (match){
                req.session.user = {id: user._id, username: user.username};
                if(user.role == 0){
                    // res.render('client/index')
                }
                if(user.role == 1){
                    res.redirect('/adminHome')
                }
            }else {
                res.render('login', {error:'password salah'})
            }
        } catch (error) {
            console.log(error)
            res.render('login',{error: 'Terjadi kesalahan'}) 
        }
    },
    logout: async (req, res) => {
        req.session.destroy((err) => {
            if(err){
                return res.status(500).send('gagal melalukan Logout');
            }
            res.redirect('/auth/login')
        })
    },
    getRegisterPage: (req, res) => {
    res.render('register');
    },
}