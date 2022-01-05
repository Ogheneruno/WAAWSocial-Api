const { Post } = require('../../models/Post');

const likePost = async (req, res) => {
    try {
            const post = await Post.findById(req.params._userId);
            if(!post.likes.includes(req.body.userId)) {
                await post.updateOne({$push: {likes: req.body.userId}});
                res.status(200).json({success: true, msg: 'Post liked'});
            } else {
                await post.updateOne({$pull: {likes: req.body.userId}})
                res.status(200).json({success: false, msg: 'Post unliked'});
            }
    } catch (err) {
        return res.status(500).json({success: false, msg: err.message});
    }
}


module.exports = likePost;