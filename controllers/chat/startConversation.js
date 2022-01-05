const { Conversation } = require('../../models/Conversation');

const startConversation = async (req, res) => {
    try {
        const conversation = await Conversation.findOne({
            members: { $all: [req.params.firstUserId, req.params.secondUserId] },
        });
        res.status(200).json({success: true, conversation});
    } catch (err) {
        return res.status(500).json({success: false, msg: err.message});
    }
}


module.exports = startConversation;