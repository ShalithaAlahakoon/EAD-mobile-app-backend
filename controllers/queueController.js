const Queue = require('../models/queue');


//get all queues
const getAllQueues = async (req, res) => {
    console.log("getAllQueues")
    try {
        const queues = await Queue.find();
        res.json(queues);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//arrived
const arrived = async (req, res) => {
    console.log("arrived")
    
    const station = req.body.stationName;
    const fuel_type = req.body.fuel_type;

    try {
        const queue = await Queue.findOne({ stationName: station, fuel_type: fuel_type });
        if (queue == null) {
            //create new queue
            const newQueue = new Queue({
                stationName: station,
                fuel_type: fuel_type,
                count: 1
            });
            const createdQueue = await newQueue.save();
            res.status(201).json(createdQueue);
        }else{
            queue.count = queue.count + 1;
            const updatedQueue = await queue.save();
            res.json(updatedQueue);
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

//exit
const exit = async (req, res) => {
    console.log("exit")
    const station = req.body.stationName;
    const fuel_type = req.body.fuel_type;

    try {
        const queue = await Queue.findOne({ stationName: station, fuel_type: fuel_type });
        if (queue == null) {
            return res.status(404).json({ message: 'Cannot find queue' });
        }else{
            queue.count = queue.count - 1;
            const updatedQueue = await queue.save();
            res.json(updatedQueue);
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

//get all queues by statio name 
const getQueuesByStationName = async (req, res) => {
    console.log("getQueuesByStationName")
    try {
        const queues = await Queue.find({ stationName: req.body.stationName });
        res.json(queues);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}






module.exports = {
    getAllQueues,
    arrived,
    exit,
    getQueuesByStationName
};
