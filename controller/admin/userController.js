const User = require('../../models/User.js');
const brrypt = require('bcrypt');

module.exports = {
    getAllUsers : async (req, res) => {
    const users = await User.find();
        res.render('admin/users/list',{users});
    }
}