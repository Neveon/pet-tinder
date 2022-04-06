const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
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
    // Note: specifying an empty array is equivalent to Mixed. The following all create arrays of Mixed
    // An "anything goes" SchemaType. Mongoose will not do any casting on mixed paths.
    // You can define a mixed path using Schema.Types.Mixed or by passing an empty object literal.
    likedPets: [],
    date: {
        type: Date,
        default: Date.now, // automatically creates a date now
    },
});

module.exports = mongoose.model("user", UserSchema);
