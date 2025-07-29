const User = require('../../models/User.js');
const bcrypt = require('bcrypt');

module.exports = {
    getAllUsers : async (req, res) => {
    const users = await User.find();
        res.render('admin/users/list',{users});
    },
    addUserPage: (req, res) =>{
        res.render('admin/users/add',{error: null})
    },
    addUser: async(req, res) =>{
        const {firstName, lastName, username, password, passwordConfirm, role} = req.body;
        const user = User.findOne({username})
        if(user.length > 0){
            return res.render('admin/users/add', {error: "Username telah digunakan"})
        }
        if (password !== passwordConfirm){
            return res.render('admin/users/add', {error: "Password harus sama"})
        }
        const hashpassword = await bcrypt.hash(password, 10);
        await User.create({username, password:hashpassword, role, firstName, lastName})
        res.redirect('/adminUser/list')
    },
    editUserPage: async (req, res) =>{
        const {id} = req.params;
        const user = await User.findById(id)
        res.render('admin/users/edit',{user, error: null})
    },
    editUser: async(req, res) =>{
        const {id} = req.params;
        const {firstName, lastName, username, password, role} = req.body;
        const user = User.findOne({username})
        if(!user || user.length === 0){
            return res.render('admin/users/edit', {error: "Username tidak ditemukan"})
        }
        let updatePassword = user.password;
        if (password != ''){
            updatePassword = await bcrypt.hash(password, 10);
        }
        await User.findByIdAndUpdate(id, {username, password:updatePassword, role, firstName, lastName})
        res.redirect('/adminUser/list')
    },
        deleteUser: async (req, res) =>{
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id)
        res.redirect('/adminUser/list')
    },
}