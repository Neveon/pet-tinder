const express = require("express");
const router = express.Router();

// For hashing/PW protection
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Pull the jwt secret when using jwt.sign()
const config = require("config");

// For decoding jwt and setting it in req.user
const auth = require("../middleware/auth");

const User = require("../models/User");

// For making a petfinder token
const petfinderToken = require("../middleware/petfinderToken");

// @route   GET api/auth
// @desc    Before accessing private pages, we authenticate the user is valid.
// @access  Private
router.get("/", auth, async (req, res) => {
    try {
        // req.user is assigned in auth middleware and it decodes the user.id which is the unique ObjectID
        // .select() to not return password
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            res.status(401).send("Problem with authentication of user.");
        }

        // respond with the user document
        res.status(200).json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error - Problem with getting authentication of user.");
    }
});

// @route   POST api/auth
// @desc    LOGIN - When logging in we obtain a petfinder access token, verify the user & set a token that holds basic user info
// @access  Public (authenticate to access private routes)
router.post("/", [petfinderToken], async (req, res) => {
    // Get email and password from the post request body
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        // In the case where there is no user with that email
        if (!user) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        // Compare the post request password to the hashed password in the DB
        // .compare() is a promise
        const isMatch = await bcrypt.compare(password, user.password); // (pw, hashed pw)
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        // payload for JWT - this will be set as header in the frontend
        const payload = {
            user: {
                id: user.id,
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
                // respond with the JWT, token
                res.status(200).json({
                    appToken: token,
                    // petfinder access token is set in the request in the petfinderToken middleware
                    petfinderToken: "Bearer " + req.petfinderToken.access_token,
                });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send(
            "Server Error - Problem when authenticating the logging in of the user."
        );
    }
});

module.exports = router;
