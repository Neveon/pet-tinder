const config = require("config");
const axios = require("axios");

// export the function
module.exports = async function (req, res, next) {
    // Send post request to receive token response
    const responseToken = await axios.post(
        "https://api.petfinder.com/v2/oauth2/token",
        new URLSearchParams({
            grant_type: "client_credentials",
            client_id: config.get("client_id"),
            client_secret: config.get("client_secret"),
        })
    );

    // console.log(responseToken);

    // Place petfinder token in the request
    req.petfinderToken = responseToken.data;

    // Check if there is no token
    if (!req.petfinderToken.access_token) {
        return res
            .status(500)
            .json({ msg: "Error with petfinder API token. Check with server middleware." });
    }

    // Call next function in chain
    next();
};
