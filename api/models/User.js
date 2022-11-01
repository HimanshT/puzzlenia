const mongoose = require('mongoose');

//Creating the user schema
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        // required: true,---getting validation error if turned true
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    practiceset: [],
});

const User = mongoose.model('User', UserSchema);
module.exports = User;