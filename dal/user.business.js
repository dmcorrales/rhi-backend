const GenericBusiness = require("./generic.business");
const User = require("./models/User");

class UserBusiness extends GenericBusiness{
 constructor({UserRepository}){
     super(UserRepository, User);
 }
}

module.exports = UserBusiness;