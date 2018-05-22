const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: {
        type:String,
        required: true    
    },
    lastName: {
        type:String,
        required: true    
    },
    email: {
        type:String,
        required: true    
    },
    password: {
        type:String,
        required: true    
    },
    createdAt:{
        type:Date,
        required: true,
        default: Date.now
    },
    updatedAt:{
        type:Date,
        required: true,
        default: Date.now
    }
});

UserSchema.methods.hashPassword = function (password) {
    return bcrypt.hashSync(password, 12);
};
UserSchema.methods.comparePassword = function (password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
};

module.exports = User = mongoose.model('User', UserSchema);