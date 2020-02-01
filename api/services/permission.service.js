const { PermissionBusiness } = require("../../dal");
class PermissionService{
    constructor(){
        this._permisionBusiness = new PermissionBusiness();
    }

    async create(entity){
        return await this._permisionBusiness.create(entity);
    }

    async update(id, entity){
        return await this._permisionBusiness.update(id,entity);
    }

    async findAll(page){
        return await this._permisionBusiness.findAll(page);
    }

    async delete(id){
        return await this._permisionBusiness.delete(id);
    }

}
module.exports = PermissionService;