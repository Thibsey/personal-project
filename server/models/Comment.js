const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CommentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    message: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Message"
    }
});

module.exports = Comment = mongoose.model('Comment', CommentSchema);