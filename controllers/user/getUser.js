const { User } = require('../../models/User');


const getUser = async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId ? await User.findById(userId) : await User.findOne({username: username});
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json({
            success: true,
            other
            // user: {
            //     ...findUser._doc,
            //     password: '',
            //     updatedAt: ''
            // }
        })
    } catch (err) {
        return res.status(500).json({success: false, msg: err.message});
    }
}

module.exports = getUser;