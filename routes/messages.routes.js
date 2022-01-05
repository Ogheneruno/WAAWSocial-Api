const express = require('express');
const router = express.Router();

const messages = require('../controllers/chat/messages');
const getUserMessages = require('../controllers/chat/getUserMessages');

router.route("/")
    .post(messages)

router.route("/:conversationId")
    .get(getUserMessages)


module.exports = router;