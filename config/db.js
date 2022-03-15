const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// No need for these options according to: https://stackoverflow.com/questions/68958221/mongoparseerror-options-usecreateindex-usefindandmodify-are-not-supported
options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true, // Responsible for server discovery and monitoring
};

const connectDB = async () => {
    try {
        await mongoose.connect(db);

        console.log("MongoDB Connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;
