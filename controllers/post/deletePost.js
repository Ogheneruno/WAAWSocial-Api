const { Post } = require('../../models/Post');

const deletePost = async (req, res) => {
    try {
        if (req.params.id === req.body.userId) {
            const post = await Post.findByIdAndDelete(req.params.id);
            if(!post) return res.status(500).json({success: false, msg: 'Post not found'});
            return res.status(200).json({success: true, msg: 'Post deleted successfully'});
        } else {
            res.status(403).json({success: false, msg: 'You can only delete your post'});
        }
    } catch (err) {
        return res.status(500).json({success: false, msg: err.message});
    }
}


module.exports = deletePost;