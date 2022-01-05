const { User } = require('../../models/User');


const followUser = async (req, res) => {
    if (req.body.userId !== req.params.id){
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)) {
                await User.updateOne({$push: {followers: req.body.userId}});
                await currentUser.updateOne({$push: {followings: req.params.id}});
                res.status(200).json({success: true, msg: 'User followed successfully'});
            } else {
                res.status(403).json({success: false, msg: 'you already follow this user'});
            }
        } catch (err) {
            return res.status(500).json({success: false, msg: err.message});
        }
    } else {
        return res.status(403).json({success: false, msg: "You can't follow yourself"});
    }
}

module.exports = followUser;
