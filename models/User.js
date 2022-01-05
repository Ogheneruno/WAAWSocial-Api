const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let userSchema = new Schema({
    username: String,

    email: String,

    password: String,

    gender: String,

    avatar: String,

    avatarSmall: String,

    secretToken: String,

    confirmed: {
        type: Boolean,
        default: false,
    },

    coverPicture: String,

    followers: Array,

    followings: Array,

    isAdmin: {
        type: Boolean,
        default: false,
    },

    desc: {
        type: String,
        max: 50
    },

    city: {
        type: String,
        max: 50
    },

    from: {
        type: String,
        max: 50
    },

    relationship: {
        type: Number,
        enum: [1, 2, 3]
    },

}, {timestamps: true});

module.exports = {
    User: model('user', userSchema)
}