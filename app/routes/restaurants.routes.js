module.exports = app => {
    const restaurants = require("../controllers/restaurants.controller.js");

    var router = require("express").Router();

    router.post("/restaurants/", restaurants.create);

    router.get("/restaurants/", restaurants.findAll);

    app.use('/api/s2rapp',router);
}