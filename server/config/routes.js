const bcrypt = require("bcrypt");
const bodyparser = require("body-parser");
const controller = require('../controller/Controller');
const validator = require('./validation-rules');
const User = require("../models/User");
const Message = require("../models/Message");
const Comment = require("../models/Comment");

module.exports = (app) => {


    app.post('/api/register', validator.regValidation , controller.register );
    app.post('/api/loginuser', validator.logValidation , controller.loginUser );
    

    app.get('/api/isloggedin', controller.isLoggedIn);
    app.get('/api/allusers', controller.getAllUsers);

}