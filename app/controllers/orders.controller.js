const db = require("../models");

const Orders = db.orders;

exports.create = (req, res) => {
    if(!req.body.userId){
       res.status(500).send({
           message: "userId cannot be null"
       });
       return;
    }

    const orders = new Orders({
            orderAddress: req.body.orderAddress,
            orderAmount: req.body.orderAmount,
            userId: req.body.userId,
            restaurantId: req.body.restaurantId,
            paymentMode: req.body.paymentMode,
            lat: req.body.lat,
            lng: req.body.lng,
            deliveryFee: req.body.deliveryFee,
            orderStatus: req.body.orderStatus
    })

    orders
    .save(orders)
    .then(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Something error occur"
        });
    });
};


exports.findAll = (req, res) =>{
    Orders.find()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occur"
        });
    });
};