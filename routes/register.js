const express = require("express");
const router = express.Router();

// For hashing/PW protection
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// mongoDB schema for a user
const User = require("../models/User");

// @route   POST api/register
// @desc    Register a user
// @access  Public (anyone can make a user)
router.post("/", async (req, res) => {
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
                expiresIn: 3600, // 1hr - this is the same amount for petfinder api
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ token }); // respond with the token
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error - Problem Registering User. Check the route.");
    }
});

module.exports = router;
