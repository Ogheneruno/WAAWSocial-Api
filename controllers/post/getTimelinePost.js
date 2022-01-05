const { Post } = require('../../models/Post');

const getTimelinePost = async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId)
        const userPosts = await Post.find({ userId: currentUser._id })
        const friendPosts = await Promise.all(
            currentUser.followings.map(friendId => {
                return Post.find({ userId: friendId })
            })
        );
        // .populate('user').sort({_id:-1});
        // if(!allPosts) return res.status(500).json({success: false, msg: 'No posts found'});
        // res.status(200).json({success: true, msg: 'All Posts', userPosts.concat(...friendPosts)});
        res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
        return res.status(500).json({success: false, msg: err.message});
    }
}


module.exports = getTimelinePost;