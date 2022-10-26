const mongoose = require('mongoose');

const fillingSchema = new mongoose.Schema({
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