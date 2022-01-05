const { Post } = require('../../models/Post');
const { User } = require('../../models/User');

const getUserAllPost = async (req, res) => {
    // try {
        const user = await User.findOne({username: req.params.username});
        const userAllPosts = await Post.find({userId: user._id}).populate('user').sort({_id:-1});
        if(! userAllPosts) return res.status(500).json({success: false, msg: 'No posts found'});
        return res.status(200).json({success: true, msg: 'User Posts', userAllPosts});
    // } catch (err) {
    //     return res.status(500).json({success: false, msg: err.message});
    // }
}


module.exports = getUserAllPost;