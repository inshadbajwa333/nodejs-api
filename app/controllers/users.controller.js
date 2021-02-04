const db = require("../models");

const Users = db.users;

exports.create = (req, res) => {
    if(!req.body.email){
        res.status(400).send({
            message: "Email Cannot be empty"
        });
        return;
    }

    const users = new Users({
        name: req.body.title,
        email:req.body.email,
        password:req.body.password
    });

    Users
    .save(Users)
    .then(data => {
       res.send(data);
    })
    .catch(err => {
        res.status(500). send({
            message:err.message || "Some error occure"
        });
    });
};

exports.findAll = (req, res) => {
  const email = req.query.email;
  var condition = email ? {email: { $regex: new RegExp(email), $options: "i"}} : {};

  Users.find(condition)
       .then(data => {
           res.send(data);
       })
       .catch(err =>{
      res.status(500).send({message: "Error fetch users"});
       });
};

exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.deleteAll = (req, res) => {

}

exports.findAllPublished = (req, res) => {

}