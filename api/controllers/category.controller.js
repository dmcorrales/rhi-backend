const { CategoryService } = require("../services");
const { CategoryDto } = require("../dtos");
const GenericController = require("./generic.controller");
const mapper = require("automapper-js");


class CategoryController extends GenericController{

    constructor(){
        super(new CategoryService() ,CategoryDto);
        this._service = new CategoryService();
    }
}

module.exports = CategoryController;