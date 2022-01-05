const {User} = require('../../models/User');
const bcryptjs = require('bcryptjs');


const updateUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin){
        if (req.body.password) {
            try {
                req.body.password = bcryptjs.hashSync(password, 12);
            } catch (err) {
                return res.status(500).json({success: false, msg: err.message});
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json({success: true, msg: 'Account updated successfully'})
        } catch (err) {
            return res.status(500).json({success: false, msg: err.message});
        }
    } else {
        return res.status(403).json({success: false, msg: 'You can update only your account'});
    }
}

module.exports = updateUser;