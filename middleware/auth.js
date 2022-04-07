/*
 *   This middleware will pull the token from the header with the key 'x-auth-token'.
 *   Then it will decode the json web token and place the value into req.user
 */
const jwt = require("jsonwebtoken");
const config = require("config");

// export the function
module.exports = function (req, res, next) {
    // Get token from header
    const token = req.header("x-auth-token");

    // Check if there is no token
    if (!token) {
        return res.status(401).json({ msg: "Please login first. Authorization Denied." });
    }

    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"), function (err, decoded) {
            if (err) {
                /*
                err = {
                    name: 'TokenExpiredError',
                    message: 'jwt expired',
                    expiredAt: 1408621000
                }
                */
                return res.stats(401).json({ msg: `${err.name} - Please login again.` });
            }

            return decoded;
        });

        // The payload looks like
        // {
        //   "user": {
        //     "id": "someMongoDocumentObjectID"
        //   },
        //   "iat": 1647402170,
        //   "exp": 1647762170
        // }

        req.user = decoded.user; // so the request has a user that contains an "id", "iat" and "exp"

        // Call the next function in line
        next();
    } catch (err) {
        res.status(401).json({ msg: "Invalid Token." });
    }
};
