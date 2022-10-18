const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
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
    role : {
        type: String,
        required: true,
    }
});

//export module
module.exports = mongoose.model('Login', loginSchema);

