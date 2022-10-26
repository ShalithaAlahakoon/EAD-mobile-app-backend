const mongoose = require('mongoose');

const fillingSchema = new mongoose.Schema({

    area:{
        type: String,
        required: true
    },
    stationName:{
        type: String,
        required: true
    },
    fuelType:{
        type: String,
        required: true
    },
    fillingArrivel : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 20
    },
    watingDuration : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 20
    },
    fillStatus : {
        type: Boolean,
        required: true,
    }
});

//export module
module.exports = mongoose.model('Filling', fillingSchema);