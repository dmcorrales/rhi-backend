const { CategoryBusiness } = require("../../dal");
class CategoryService {
    constructor(){
        this._categoryBusiness = new CategoryBusiness();
    }

    async create(entity){
        return await this._categoryBusiness.create(entity);
    }

    async update(id, entity){
        return await this._categoryBusiness.update(id,entity);
    }

    async findAll(page){
        return await this._categoryBusiness.findAll(page);
    }

    async delete(id){
        return await this._categoryBusiness.delete(id);
    }

}
module.exports = CategoryService;