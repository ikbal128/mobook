const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    title: {
        type : String,
        require: true
    },
    duration: {
        type : Number,
        require: true
    },
})

module.exports = mongoose.model(`Movie`, movieSchema);