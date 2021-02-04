const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const router = require('./app/routes/users.routes')(app);
const restaurants = require('./app/routes/restaurants.routes')(app);
const orders = require("./app/routes/orders.routes")(app);
const corsOptions = {
    origin : "http://localhost:8080"
}

app.use(cors());




app.get("/", (req, res) =>{
    res.json({ message: "Hello world of nodejs"});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}.`);
});

const db = require("./app/models");

db.mongoose
   .connect(db.url, {
       useNewUrlParser: true,
       userUnifiedTopology: true
   })
   .then(() =>{
       console.log("Connect to the database");
   })
   .catch(err =>{
       console.log("Cannot connect to database", err);
       process.exit();
   })