const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    firstName: {
        type: String,
        trim: true,
        required: "First name is required"
    },
    lastName: {
        type: String,
        trim: true,
        required: "Last name is required"
    },
    username: {
        type: String,
        trim: true,
        required: "Username is required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required",
        validate: [
            (input) => input.length >= 6,
            "Password should be longer"
        ]
    }

});

const User = mongoose.model("User", userSchema);

module.exports = User;