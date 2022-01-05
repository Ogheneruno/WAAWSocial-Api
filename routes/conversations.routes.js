const express = require('express');
const router = express.Router();


const conversations = require('../controllers/chat/conversations');
const getUserConversations = require('../controllers/chat/getUserConversation');
const startConversations = require('../controllers/chat/startConversation');

router.route("/")
    .post(conversations);

router.route("/:userId")
    .get(getUserConversations);

router.route("/find/:firstUserId/:secondUserId")
    .get(startConversations);


module.exports = router;