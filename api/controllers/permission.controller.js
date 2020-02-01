const { PermissionService } = require("../services");
const { PermissionDto } = require("../dtos");
const GenericController = require("./generic.controller");
class PermissionController extends GenericController{

    constructor(){
        super(new PermissionService() ,PermissionDto);
    }

}

module.exports = PermissionController;