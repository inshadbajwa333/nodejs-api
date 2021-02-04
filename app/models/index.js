const mongoose = require("mongoose");
const dbConfig = require("../config/db.config.js");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./users.model.js")(mongoose);
db.restaurants = require("./restaurants.model.js")(mongoose);
db.orders = require("./orders.model.js")(mongoose);

module.exports = db;