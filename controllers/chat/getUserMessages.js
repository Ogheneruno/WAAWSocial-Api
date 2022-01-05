const { Message } = require('../../models/Message');

const getUserMessage = async (req, res) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId,
        });
        res.status(200).json({success: true, messages});
    } catch (err) {
        res.status(500).json({success: false, msg: err.message});
    }
}


module.exports = getUserMessage;