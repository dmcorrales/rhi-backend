const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let categorySchema = new Schema({
    name: {
        type: String,
        required: [true, "Cannot be empty"]
    },
    status: {
        type: Boolean,
        default: true
    }

});
categorySchema.plugin( uniqueValidator, {message: '{PATH} must be unique'});
module.exports = mongoose.model('Category', categorySchema);