const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let messageSchema = new Schema({
    conversationId: {
        type: String
    },
    sender: {
        type: String
    },
    text: { 
        type: String
    }
}, {timestamps: true});

module.exports = {
    Message: model('message', messageSchema)
}