const { User } = require('../../models/User');


const unFollowUser = async (req, res) => {
    if (req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)) {
                await User.updateOne({$pull: {followers: req.body.userId}});
                await currentUser.updateOne({$pull: {followings: req.params.id}});
                res.status(200).json({success: true, msg: 'User unfollowed successfully'});
            } else {
                res.status(403).json({success: false, msg: 'you are not following this user'});
            }
        } catch (err) {
            return res.status(500).json({success: false, msg: err.message});
        }
    } else {
        return res.status(403).json({success: false, msg: "You can't unfollow yourself"});
    }
}

module.exports = unFollowUser;