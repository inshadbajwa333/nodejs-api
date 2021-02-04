const db = require("../models");


const Restaurants = db.restaurants;

exports.create = (req, res) =>{
    if(!req.body.tradeLicenseNumber){
        res.status(400).send({
            message: "Trade License Number Cannot be empty"
        });
        return
    }

    const restaurants = new Restaurants({
        restaurantName: req.body.restaurantName,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        address:req.body.address,
        country:req.body.country,
        lat:req.body.lat,
        log:req.body.log,
        tradeLicenseNumber:req.body.tradeLicenseNUmber
    });

    restaurants
    .save(restaurants)
    .then(data => {
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({
            message:err.message || "Some error occure"
        });
    });
};


exports.findAll = (req, res) =>{
    Restaurants.find()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:err.message || "Some error occue"
        });
    })
}