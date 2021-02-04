module.exports = app =>{
    const users = require("../controllers/users.controller.js");

    var router = require("express").Router();

    router.post("/", users.create);

    router.get("/", users.findAll);

    app.use('/api/s2rapp',router);
};