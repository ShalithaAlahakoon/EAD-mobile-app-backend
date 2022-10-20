const Station = require('../models/station');

//create station
const createStation = async (req, res) => {
    const station = new Station({
        stationName: req.body.stationName,
        stationArea: req.body.stationArea,
        stationAddress: req.body.stationAddress,
        fuelTypes: req.body.fuelTypes,
        owner: req.body.owner,
        owner_ID: req.body.owner_ID,
        openClose: req.body.openClose
    });
    try {
        const newStation = await station.save();
        res.status(201).json(newStation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports =  {
    createStation
};


