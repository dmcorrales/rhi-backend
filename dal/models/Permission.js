const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;
let permissionSchema = new Schema({
    name: {
        type: String,
        required: [true, "Cannot be empty"]
    },
    route: {
        type: String,
        required: [true, "Cannot be empty"]

    },
    parent: {
        type: String,
        default:0
    },
    status: {
        type: Boolean,
        default: true
    }
});

permissionSchema.plugin( uniqueValidator, {message: '{PATH} must be unique'});
module.exports = {
    PermissionModel : mongoose.model('Permission', permissionSchema),
    PermissionSchema: permissionSchema
}
