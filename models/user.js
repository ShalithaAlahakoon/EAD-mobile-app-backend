const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    password : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    type : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    nic: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});

//export module
module.exports = mongoose.model('User', userSchema);