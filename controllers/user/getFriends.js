const { User } = require('../../models/User');


const getUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        const friends = await Promise.all(
            user.followings.map(friendId=> {
                return User.findById(friendId);
            })
        );
        let friendList = [];
        friends.map(friend => {
            const {_id, username, avatar} = friend;
            friendList.push({ _id, username, avatar });
        });
        res.status(200).json({
            success: true,
            friendList
        })
    } catch (err) {
        return res.status(500).json({success: false, msg: err.message});
    }
}

module.exports = getUser;