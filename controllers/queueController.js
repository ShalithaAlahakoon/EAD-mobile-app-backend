const Queue = require('../models/queue');

//get queue by staion name 
const getQueueByStationName = async (req, res) => {
    try {
        const queue = await Queue.findOne({ stationName: req.params.stationName });
        // put qeueu in Array
        var queueArray = [];
        queueArray.push(queue);
        res.json(queueArray);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//get all queues
const getAllQueues = async (req, res) => {
    try {
        const queues = await Queue.find();
        res.json(queues);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//create queue
const createQueue = async (req, res) => {
    const queue = new Queue({
        stationName: req.body.stationName,
        Octane92Queue: req.body.Octane92Queue,
        Octane95Queue: req.body.Octane95Queue,
        DieselQueue: req.body.DieselQueue,
        SuperDieselQueue: req.body.SuperDieselQueue
    });
    try {
        const newQueue = await queue.save();
        res.status(201).json(newQueue);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

//update queue
const updateQueue = async (req, res) => {
    try {
        const queue = await Queue.findOne({ stationName: req.params.stationName });
        if (queue == null) {
            return res.status(404).json({ message: 'Cannot find queue' })
        }
        if (req.body.stationName != null) {
            queue.stationName = req.body.stationName
        }
        if (req.body.Octane92Queue != null) {
            queue.Octane92Queue = req.body.Octane92Queue
        }
        if (req.body.Octane95Queue != null) {
            queue.Octane95Queue = req.body.Octane95Queue
        }
        if (req.body.DieselQueue != null) {
            queue.DieselQueue = req.body.DieselQueue
        }
        if (req.body.SuperDieselQueue != null) {
            queue.SuperDieselQueue = req.body.SuperDieselQueue
        }
        const updatedQueue = await queue.save()
        res.json(updatedQueue)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//delete queue
const deleteQueue = async (req, res) => {
    try {
        const queue = await Queue.findOne({ stationName: req.params.stationName });
        if (queue == null) {
            return res.status(404).json({ message: 'Cannot find queue' })
        }
        await queue.remove()
        res.json({ message: 'Deleted Queue' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getQueueByStationName,
    getAllQueues,
    createQueue,
    updateQueue,
    deleteQueue
};
