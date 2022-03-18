const express = require("express");
const router = express.Router();

// middleware for checking and decoding token into a req.user
const auth = require("../middleware/auth");

const User = require("../models/User");

// @route   POST /api/terminate
// @desc    Delete user account
// @access  Private
router.post("/", auth, async (req, res) => {
    try {
        // req.user.id is decoded and assigned in auth middleware
        let user = await User.findById(req.user.id);

        // In the case there is no user, 400 error
        if (!user) return res.status(400).json({ msg: "User not found" });

        // Verify the client owns the found user account
        // console.log(user);
        // console.log(req.user.id);
        if (user._id.toString() !== req.user.id) {
            return res.status(401).json({ msg: "Not Authorized" });
        }

        await User.findByIdAndRemove(req.user.id);

        res.status(200).json({ msg: "User account removed successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error - Problem with terminating account");
    }
});

module.exports = router;
