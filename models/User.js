const mongoose = require("mongoose");

// petSchema for likedPets
// const petSchema = mongoose.Schema({
//     type: String,
//     unique: true
// });

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // likedPets: [],
    date: {
        type: Date,
        default: Date.now, // automatically creates a date now
    },
});

module.exports = mongoose.model("user", UserSchema);
