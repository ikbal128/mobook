const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type : String,
        require: true
    },
    lasttName: {
        type : String,
        require: true
    },
    username: {
        type : String,
        require: true
    },
    password: {
        type : String,
        require: true
    },
    role: {
        type : Number,
        enum: [0, 1],
        require: true
    },
})

module.exports = mongoose.model(`User`, userSchema);