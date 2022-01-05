const { Message } = require('../../models/Message');

const createNewMessage = async (req, res) => {
    const newMessage = new Message(req.body);
    
    try {
        const savedMessage = await newMessage.save();
        res.status(200).json({success: true, savedMessage});
    } catch (err) {
        res.status(500).json({success: false, msg: err.message});
    }
}


module.exports = createNewMessage;