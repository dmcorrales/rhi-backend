const { PublicationDto } = require("../dtos");
const { PublicationService } = require("../services")
const GenericController = require("./generic.controller");

class PublicationController extends GenericController{
    constructor(){
        super(new PublicationService(), PublicationDto);
    }
}

module.exports = PublicationController;