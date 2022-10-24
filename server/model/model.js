const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    firstname: {
        type: String,
        required: true
    },

    email: {
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