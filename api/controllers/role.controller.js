const { RoleService } = require("../services");
const { RoleDto } = require("../dtos");
const GenericController = require("./generic.controller");
class PermissionController extends GenericController{

    constructor(){
        super(new RoleService(), RoleDto);
    }
}

module.exports = PermissionController;