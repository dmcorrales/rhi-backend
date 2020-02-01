const { PublicationBusiness } = require("../../dal");

/**
 * User Service
 * Create connection between 'api' and 'persistence'.
 * @author Daniel M Corrales
 * @version 1.0
 */
class CategoryService {

    constructor(){
        this._publicationBusiness = new PublicationBusiness();
    }

    async create(entity){
        let result = await this._publicationBusiness.create(entity);
        return result;
    }

    async update(id,entity){
        let result = await this._publicationBusiness.update(id,entity);
        return result;
    }

    async findAll(numberPage){
        return await this._publicationBusiness.findAll(numberPage);
    }

    async delete(id){
        return await this._publicationBusiness.delete(id);
    }

    async findOne(id){
        return await this._publicationBusiness.findOne(id);
    }

}

module.exports = CategoryService;