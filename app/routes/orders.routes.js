module.exports = app => {
    const orders = require("../controllers/orders.controller");


    var router = require("express").Router();

    router.post("/orders/", orders.create);
    router.get("/orders", orders.findAll);

    app.use('/api/s2rapp',router);
}