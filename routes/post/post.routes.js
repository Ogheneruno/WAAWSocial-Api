const express = require('express');
const router = express.Router();
const verify = require('../../middleware/authjwt');
const upload = require('../../config/multerSetup');


const createPost = require('../../controllers/post/createPost');
const getAll = require('../../controllers/post/getAll');
const getUserAll = require('../../controllers/post/getUserAll');
const updatePost = require('../../controllers/post/updatePost');
const getSingle = require('../../controllers/post/getSingle');
const deletePost = require('../../controllers/post/deletePost');
const likePost = require('../../controllers/post/likePost');
const getTimelinePost = require('../../controllers/post/getTimelinePost');


router.route('/')
    .post(verify, upload.single('postMedia'), createPost)
    .get(verify, getAll);

router.route('/profile/:username')
    .get(getUserAll);

router.route('/:_userId')
    .put(verify, upload.single('postMedia'), updatePost)
    .get(verify, getSingle)
    .delete(verify, deletePost)

router.route('/:_userId/like')
    .put(likePost);

router.route('/timeline/:_userId')
    .get(getTimelinePost)

module.exports = router;