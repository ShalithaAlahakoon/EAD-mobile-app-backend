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

const getFuels = async (req, res) => {
    try {
        const fuel = await Fuel.find();
        res.json(fuel);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateFuel = async (req, res) => {
    const fuel = await Fuel.findByIdAndUpdate(req.params.id);

    if (!fuel) {
        return res.status(400).json({
            success: false,
            message: 'No student  Group found'
        });
    } else {
        const {station, fuelType, arrivalTime,litres } = req.body;

        fuel.station = station;
        fuel.fuelType = fuelType;
        fuel.arrivalTime = arrivalTime;
        fuel.litres = litres;

        await station.save();

        res.status(200).json({
            success: true,
            data: station
        });
    }
}
module.exports = {
    addFuels,
    getFuels,
    updateFuel
}

