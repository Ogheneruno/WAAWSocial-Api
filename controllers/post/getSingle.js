const { Post } = require('../../models/Post');

const getSingleUserPost = async (req, res) => {
    try {
        const userPosts = await Post.find({user: req.user._id}).populate('user').sort({_id:-1});
        if(!userPosts) return res.status(500).json({success: false, msg: 'No posts found'});
        
        return res.status(200).json({success: true, msg: 'Your Posts', userPosts});
    } catch (err) {
        return res.status(500).json({success:false, msg: err.message});
    }
}

module.exports = getSingleUserPost;