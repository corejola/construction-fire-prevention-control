// 'use strict';

// app/models/user.js
// load the things we need
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

// define the schema for our user model
const userSchema = new Schema({


    // firstName: {
    //     type: String,
    //     trim: true,
    //     required: "First name is required"
    // },
    // lastName: {
    //     type: String,
    //     trim: true,
    //     required: "Last name is required"
    // },
    username: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter a username.']
    },
    email: {
        type: String,
        min: [3, 'Please enter an email in the correct format'],
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        required: [true, 'Please enter an email']
    },
    password: {
        type: String,
        min: [8, 'Your password must be at least 8 characters long'],
        required: [true, 'Please enter a password.']
    },

});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

// create the model for users and expose it to our app
module.exports = User;