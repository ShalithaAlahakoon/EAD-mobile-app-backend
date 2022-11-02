const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
    stationName : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    stationArea : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    stationAddress : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    //fuel types object array
    fuelTypes : [{
       
        fuelType: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 50
        },
        availability: {
            type: Boolean,
            required: true,
        },
        nextArrival: {
            type: String,
            required: false,
        },
        liters: {
            type: String,
            required: false,
        }

    }],
    owner : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    openClose : {
        type: Boolean,
        required: true,
    },
    
});

module.exports = mongoose.model('Station', stationSchema);

