const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let conversationSchema = new Schema({
    members: {
        type: Array,
    }
}, {timestamps: true});

module.exports = {
    Conversation: model('conversation', conversationSchema)
}