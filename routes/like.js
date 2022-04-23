// For when a user swipes right (they like an animal)
const express = require("express");
const router = express.Router();

// middleware for checking and decoding token into a req.user
const auth = require("../middleware/auth");

// mongoDB User model
const User = require("../models/User");

// @route   POST /api/like
// @desc    Update the User's data by adding the liked pet to the user's likedPets array
// @access  Private
router.post("/", auth, async (req, res) => {
    const { animal } = req.body;
    // console.log(animal);

    try {
        // req.user.id is decoded and assigned in auth middleware
        let user = await User.findById(req.user.id);

        // In the case there is no user, 400 error
        if (!user) return res.status(400).json({ msg: "User not found" });

        // Verify the client (web app token) owns the found user account in DB
        // console.log(user);
        // console.log(req.user.id);
        if (user._id.toString() !== req.user.id) {
            return res.status(401).json({ msg: "Not Authorized" });
        }

        // We dont save the model in-memory since if we do many concurrent writes, we may not be working with the updated document
        await User.findByIdAndUpdate(req.user.id, { $push: { likedPets: animal } });

        res.status(200).json({ msg: "Liked " + animal.name });
    } catch (err) {
        // This will tell us a mongoose query error most likely
        console.error(err.message);
        res.status(500).send("Problem with adding liked pet account.");
    }
});

// @route   GET /api/like
// @desc    Get all of the user's liked pets
// @access  Private
router.get("/", auth, async (req, res) => {
    try {
        // req.user.id is decoded and assigned in auth middleware
        let user = await User.findById(req.user.id);

        // In the case there is no user, 400 error
        if (!user) return res.status(400).json({ msg: "User not found" });

        // Verify the client owns the found user account
        if (user._id.toString() !== req.user.id) {
            return res.status(401).json({ msg: "Not Authorized" });
        }

        res.status(200).json(user.likedPets);
    } catch (err) {
        // This will tell us a mongoose query error most likely
        console.error(err.message);
        res.status(500).send("Problem with adding liked pet account.");
    }
});

// @route   DELETE /api/like
// @desc    Delete the User's liked pet from the user's likedPets array
// @access  Private
router.delete("/:id", auth, async (req, res) => {
    console.log(`The id to delete is: ${req.params.id}`);

    try {
        // req.user.id is decoded and assigned in auth middleware
        let user = await User.findById(req.user.id);

        // In the case there is no user, 400 error
        if (!user) return res.status(400).json({ msg: "User not found" });

        // Verify the client owns the found user account
        if (user._id.toString() !== req.user.id) {
            return res.status(401).json({ msg: "Not Authorized" });
        }

        // console.log(user);

        // remove objects from array using req.params.id
        await User.findOneAndUpdate(
            { _id: req.user.id },
            {
                $pull: {
                    // we must cast as integer because the id's are integers
                    likedPets: { id: parseInt(req.params.id) },
                },
            },
            // This should return the object after the update is applied
            { new: true }
        )
            .then((doc) => console.log(doc))
            .catch((err) => console.log(err));

        res.status(200).json({ msg: "Sucessfully removed pet" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error removing liked pet" });
    }
});

module.exports = router;
