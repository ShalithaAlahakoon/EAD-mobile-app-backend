const mongoose = require('mongoose');

const queueSchema = new mongoose.Schema({
    stationName: {
        type: String,
        required: true
    },
    fuel_type: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true,
        //can't be less than 0
        min: 0
    }
});

module.exports = mongoose.model('Queue', queueSchema);
