const { RoleBusiness } = require("../../dal");

/**
 * User Service
 * Create connection between 'api' and 'persistence'.
 * @author Daniel M Corrales
 * @version 1.0
 */
class RoleService {

    constructor(){
        this._roleBusiness = new RoleBusiness();
    }

    async create(entity){
        let result = await this._roleBusiness.create(entity);
        return result;
    }

    async update(id,entity){
        let result = await this._roleBusiness.update(id,entity);
        return result;
    }

    async findAll(numberPage){
        return await this._roleBusiness.findAll(numberPage);
    }

    async delete(id){
        return await this._roleBusiness.delete(id);
    }

}

module.exports = RoleService;