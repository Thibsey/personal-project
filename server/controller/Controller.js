const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");
const Message = require("../models/Message");
const Comment = require("../models/Comment");


function register(req, res) {
    var errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.send({ errors: errors.mapped() });
    } else {
    var user = new User(req.body);
    user.password = user.hashPassword(user.password);
    user
        .save()
        .then(user => {
            return res.json(user);
        })
        .catch(err => res.send(err));
    }
}

function loginUser(req, res) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({ errors: errors.mapped() });
    }
    User.findOne({
        email: req.body.email
    })
        .then(function (user) {
            if (!user) {
                return res.send({ error: true, message: "User does not exist!" });
            }
            if (!user.comparePassword(req.body.password, user.password)) {
                return res.send({ error: true, message: "Wrong password!" });
            }
            req.session.user = user;
            req.session.isLoggedIn = true;
            res.send(user);
            return res.send({ message: "You are signed in" });
        })
        .catch(function (error) {
            console.log(error);
        });
}

function isLoggedIn(req, res, next) {
    if (req.session.isLoggedIn) {
        res.send(true);
    } else {
        res.send(false);
    }
}


function getAllUsers(req, res) {

    User.find().then(req => {
        res.json(req);
    })
    .catch(error => {
        res.json(error)
    })

}


module.exports = {
    register,
    loginUser,
    isLoggedIn,
    getAllUsers
}