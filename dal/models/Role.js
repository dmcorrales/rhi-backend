const mongoose = require('mongoose');
const {PermissionSchema} = require('./Permission');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let roleSchema = new Schema({
    name: {
        type: String,
        required: [true, "Cannot be empty"]
    },
    permissions: [],
    status: {
        type: Number,
        default: true
    }

});
roleSchema.plugin( uniqueValidator, {message: '{PATH} must be unique'});
module.exports = mongoose.model('Role', roleSchema);