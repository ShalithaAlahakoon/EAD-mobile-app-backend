const mongoose = require('mongoose');

const queueSchema = new mongoose.Schema({
    stationName: {
        type: String,
        required: true
    },
    Octane92Queue: {
        type: Number,
        required: true
    },
    Octane95Queue: {
        type: Number,
        required: true
    },
    DieselQueue: {
        type: Number,
        required: true
    },
    SuperDieselQueue: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Queue', queueSchema);
