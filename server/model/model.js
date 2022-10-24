const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },

    Firstname: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true,
        unique: true
    },

    phone: String,
    sexe: String,
    status: String
})

const userDB = mongoose.model('userdb', schema);
module.exports = userDB;