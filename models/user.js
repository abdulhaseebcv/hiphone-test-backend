const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    role: String
});

const userModel = mongoose.model('new-user', userSchema);

module.exports = userModel;