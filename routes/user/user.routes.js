const express = require('express');
const router = express.Router();
const profilePicUpload = require('../../controllers/user/profilePic');
const updateUser = require('../../controllers/user/updateUser');
const deleteUser = require('../../controllers/user/deleteUser');
const getUser = require('../../controllers/user/getUser');
const getFriends = require('../../controllers/user/getFriends');
const followUser = require('../../controllers/user/followUser');
const unFollowUser = require('../../controllers/user/unFollowUser');
const upload = require('../../config/multerSetup');
const verify = require('../../middleware/authjwt');


router.post('/update-avatar', verify, upload.single('profilePic'), profilePicUpload);

router.route('/')
    .get(getUser);

router.route('/:id')
    .put(verify, updateUser)
    .delete(verify, deleteUser);

router.route('/friends/:userId')
    .get(getFriends)

router.route('/:id/follow')
    .put(verify, followUser);

router.route('/:id/unfollow')
    .put(verify, unFollowUser);

module.exports = router;