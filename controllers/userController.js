const User = require('../models/user');

//create user
const createUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        type: req.body.type,
        email: req.body.email,
        nic: req.body.nic
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

//get all
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


//export
module.exports =  {
    createUser,
    getAllUsers
};