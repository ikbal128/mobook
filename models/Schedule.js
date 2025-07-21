const mongoose = require('mongoose');
const {ObjectId}= mongoose.Types;

const scheduleSchema = new mongoose.Schema({
    filmId: {
        type : ObjectId,
        ref: 'Movie',
        require: true
    },
    room: {
        type : String,
        require: true
    },
    times: {
        type : Date,
        require: true
    },
})

module.exports = mongoose.model(`Schedule`, scheduleSchema);