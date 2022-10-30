const Station = require('../models/station');
const Queue = require('../models/queue');

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

//get all
const getAllStations = async (req, res) => {
    try {
        const stations = await Station.find();

        //get queue details of station by station name
        for (var i = 0; i < stations.length; i++) {
            var station = stations[i];
            var stationName = station.stationName;
            var queues = await Queue.find({ stationName: stationName });
            station.queues = queues;
        }


        res.json(stations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//get only areas
const getAreas = async (req, res) => {
    try {
        //get all areas form stations
        const areas = await Station.find().distinct('stationArea');
        //create json object
        var areasJson = {
            areas: areas
        }


        res.json(areasJson);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//get station names by area
const getStationNamesByArea = async (req, res) => {
    try {
        //get station in area
        const stations = await Station.find({ stationArea: req.params.area }).distinct('stationName');
        res.json(stations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//get station by name
const getStationByName = async (req, res) => {
    try {
        //get station by name
        const station = await Station.findOne({ stationName: req.params.name });
        res.json(station);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports =  {
    createStation,
    getAllStations,
    getAreas,
    getStationNamesByArea,
    getStationByName
};


