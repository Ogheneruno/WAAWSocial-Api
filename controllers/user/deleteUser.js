const { User } = require('../../models/User');


const deleteUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin){
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json({success: true, msg: 'Account deleted successfully'})
        } catch (err) {
            return res.status(500).json({success: false, msg: err.message});
        }
    } else {
        return res.status(403).json({success: false, msg: 'You can delete only your account'});
    }
}

module.exports = deleteUser;