const GenericService = require("./generic.service");

class UserService extends GenericService {
    constructor({ UserBusiness }) {
        super(UserBusiness);
    }
}

module.exports = UserService;