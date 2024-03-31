const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}); 

const users = mongoose.model('users', usersSchema);

module.exports = users;