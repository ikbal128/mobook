const mongoose = require('mongoose');
const {ObjectId}= mongoose.Types;

const bookingSchema = new mongoose.Schema({
    userId: {
        type : ObjectId,
        ref: 'User',
        require: true
    },
    seatId: {
        type : ObjectId,
        ref: 'Seat',
        require: true
    },
    times: {
        type : Date,
        require: true
    },
})

module.exports = mongoose.model(`Booking`, bookingSchema);