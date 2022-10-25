const express = require('express');
const Fuel = require("../models/fuel");

const addFuels = async(req, res) =>{
    try {
        const [ station, fuelType, arrivalTime, litres ] = req.request.body;
        if(!station || !fuelType || !arrivalTime || !litres){
            return res.status(400).json({
                success: false,
                message: 'Please enter all details'
            });
        }
    } catch (error) {
        return(res.body = {message: error.message});
    }
};

module.exports = {
    addFuels
}

