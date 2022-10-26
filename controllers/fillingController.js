const router = require("express").Router();
const FillingModel = require('../models/fillingInfo');

router.route("/add").post((req, res) => {
    // res.json("contact us record Added"+JSON.stringify(req.body));
    console.log("data " + JSON.stringify(req.body));
    const area = req.body.area;
    const stationName = req.body.station;
    const fuelType = req.body.fuel;
    const fillingArrivel = req.body.arrivel;
    const fillStatus = req.body.fillSt;
    const watingDuration = req.body.wating;

    const fillingInfo = new FillingModel({
        area,
        stationName,
        fuelType,
        fillingArrivel,
        fillStatus,
        watingDuration

    });
    fillingInfo.save().then((fill) => {
        res.status(200).json({ data: fill, action: "success", message: "successfully added filling info" });
    }).catch((err) => {
        res.status(400).json({ message: err.message, data: [], action: "error" });
    })
});

router.route("/").get((req, res) => {

    FillingModel.find().then((fillInfo) => {
        res.status(200).json({ data: fillInfo, action: "success", message: "successfully data found" });

    }).catch((err) => {
        res.status(400).json({ message: err.message, data: [], action: "error" });
    });

});

module.exports = router;

