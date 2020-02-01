const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;
let listRoles = {
    values:['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} is not a valid role'
}
let userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Cannot be empty"]
    },
    email: {
        type: String,
        required: [true, "Cannot be empty"]

    },
    password: {
        type: String,
        required: [true, "Cannot be empty"]
    },
    role: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});
userSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}
userSchema.plugin( uniqueValidator, {message: '{PATH} must be unique'});
module.exports = mongoose.model('User', userSchema);