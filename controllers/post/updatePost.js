const { Post } = require('../../models/Post');
const cloudinary = require('cloudinary').v2;
const cloudinarySetup = require('../../config/cloudinarySetup');

const updatePost = async (req, res) => {
    try { 
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({success: false, msg: 'Post not found'});
        if (post.userId === req.body.userId) {
            let {title, description, mediaType} = req.body;

            if (!description) return res.status(400).json({success: false, msg: 'Please type a post'});

            let imageOrVideo = '';

            if (req.file) {
                await cloudinarySetup();

                const uploadedMedia = await cloudinary.uploader.upload(req.file.path, { resource_type: "auto"});

                imageOrVideo = uploadedMedia.secure_url;
            }

            const updatedPost = new Post({
                user: req.user._id,
                title,
                description,
                mediaType,
                media: imageOrVideo
            });

            if(!newPost) return res.status(500).json({success: false, msg: 'An error has occured'});

            await newPost.updateOne({$set: req.body});

            return res.status(200).json({success: true, msg: 'Post updated Successfully', updatedPost})
        } else {
            res.status(403).json({success: false, msg: 'You can only update your post'});
        }
    } catch (err) {
        res.status(500).json({success: false, msg: err.message});
    }
}

module.exports = updatePost;