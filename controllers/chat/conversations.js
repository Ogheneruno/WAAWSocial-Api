const { Conversation } = require('../../models/Conversation');

const createNewConversation = async (req, res) => {
    const newConversation = new Conversation ({
        members: [
            req.body.senderId,
            req.body.receiverId
        ],
    });
    try {
        const savedConversation = await newConversation.save();
        res.status(200).json({success: true, msg: "chat posted", savedConversation})
    } catch (err) {
        res.status(500).json({success: false, msg: err.message});
    }
};

module.exports = createNewConversation;