import axios from "axios";

// destructure response token and set as default axios headers for all requests (common)
const setAuthToken = ({ appToken, petfinderToken }) => {
    // console.log("In setAuthToken... Destructured Token values:");
    // console.log(ppToken);
    // console.log(petfinderToken);

    if (appToken && petfinderToken) {
        axios.defaults.headers.common["appToken"] = appToken;
        axios.defaults.headers.common["petfinderToken"] = petfinderToken;
        // console.log("\nAxios header info");
        // console.log(axios.defaults.headers.common);
        // console.log();
        // console.log(axios.defaults.headers.common["appToken"]);
        // console.log(axios.defaults.headers.common["petfinderToken"]);
    } else {
        delete axios.defaults.headers.common["appToken"];
        delete axios.defaults.headers.common["petfinderToken"];
    }
};

export default setAuthToken;
