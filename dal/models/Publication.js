const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;

let publicationSchema = new Schema({
    category: {
        type: Object,
        required: [true, "Cannot be empty"]
    },
    author: {
        type: String,
        required: [true, "Cannot be empty"]

    },
    title: {
        type: String,
        required: [true, "Cannot be empty"]
    },
    subtitle: {
        type: String,
        required: [true, "Cannot be empty"]
    },
    content: {
        type: String,
        default: true,
        required: [true, "Cannot be empty"]

    },
    path_article: {
        type: String,
        default: false,
        required: [true, "Cannot be empty"]
    },
    creation_date: {
        type: Date,
    },
    edition_date: {
        type: Date
    },
    status: {
        type: Boolean,
        default: true
    }


});

publicationSchema.plugin( uniqueValidator, {message: '{PATH} must be unique'});
module.exports = mongoose.model('Publication', publicationSchema);