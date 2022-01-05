const { Conversation } = require('../../models/Conversation');

const getUserConversation = async (req, res) => {
    try {
        const conversation = await Conversation.find({
            members: { $in: [req.params.userId] },
        });
        res.status(200).json({success: true, conversation});
    } catch (err) {
        return res.status(500).json({success: false, msg: err.message});
    }
}


module.exports = getUserConversation;