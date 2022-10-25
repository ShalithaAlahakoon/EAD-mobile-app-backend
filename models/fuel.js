const mongoose = require('mongoose');

const fuelSchema = new mongoose.Schema({
    station : {
        type: String,
        required: true
    },

    fuelType : {
        type: String,
        required: true
    },

    arrivalTime : {
        type: String,
        required: true
    },

    litres : {
        type: Number,
        required: true
    }
});

//export module
module.exports = mongoose.model('fuel', fuelSchema);