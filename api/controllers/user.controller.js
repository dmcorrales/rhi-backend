const {UserDto} = require("../dtos");
const { UserService } = require("../services")
const GenericController = require("./generic.controller");

class UserController extends GenericController{
    constructor(){
        super(new UserService(), UserDto);
    }
}

module.exports = UserController;