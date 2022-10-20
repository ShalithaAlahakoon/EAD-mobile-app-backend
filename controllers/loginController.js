const Login = require('../models/login.js');

const getAllLogins = async (req, res) => {
    try {
        const logins = await Login.find();
        res.json(logins);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//create login
const createLogin = async (req, res) => {
    const login = new Login({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    });
    try {
        const newLogin = await login.save();
        res.status(201).json(newLogin);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}



module.exports =  {
    getAllLogins,
    createLogin
};