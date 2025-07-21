const mongoose = require('mongoose');
const {ObjectId}= mongoose.Types;

const seatSchema = new mongoose.Schema({
    scheduleID: {
        type : ObjectId,
        ref: 'Schedule',
        require: true
    },
    name: {
        type : String,
        require: true
    },
    status: {
        type : String,
        enum: ['available', 'booked'],
        require: true
    },
})

module.exports = mongoose.model(`Seat`, seatSchema);