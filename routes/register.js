const express = require("express");
const router = express.Router();

// For hashing/PW protection
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// mongoDB schema for a user
const User = require("../models/User");

// For making a petfinder token
const petfinderToken = require("../middleware/petfinderToken");

// @route   POST api/register
// @desc    Register a user
// @access  Public (anyone can make a user)
router.post("/", [petfinderToken], async (req, res) => {
    // pull from req.body the name and email
    const { firstName, lastName, email, password } = req.body;

    // try to register user
    try {
        // Check for user with that email
        let user = await User.findOne({ email }); // same as email.email (since email: email)

        if (user) {
            return res.status(400).json({ msg: "A user with that email already exists" });
        }

        // Creating new user
        user = new User({
            firstName,
            lastName,
            email,
            password,
            likedPets: [],
        });

        // Encrypt the password
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        // Saving, await for the execution to pause until Promise is resolved
        await user.save();

        // JSON Web Token - JWT
        const payload = {
            user: {
                id: user.id, // this is the mongo document ObjectID which can be used to find this unique user
            },
        };

        jwt.sign(
            payload,
            config.get("jwtSecret"),
            {
                expiresIn: 3500,
            },
            (err, token) => {
                if (err) throw err;

                // Respond with app and petfinder tokens
                res.status(200).json({
                    appToken: token,
                    // petfinder access token is set in the request in the petfinderToken middleware
                    petfinderToken: "Bearer " + req.petfinderToken.access_token,
                });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error - Problem Registering User.");
    }
});

module.exports = router;
