const { Role }= require('./models');
const { PermissionModel : Permission } = require('./models/Permission');
const { StringUtil } = require('../api/util');
/**
 * Role Business
 * @author Daniel M Corrales
 * @version 1.0
 */
class RoleBusiness {
    constructor(){
        this._stringUtil = new StringUtil();
    }

    async create(entity){
        console.log(entity)
        let permission = entity.permissions;
        entity.permissions = [];

        var role = new Role(entity);
        role.permissions.push(permission);
        return await role.save();
    }

    async update(id, entity){

        return await Role.findOneAndUpdate(id, entity, { new:true, runValidators: true });
    }

    async count(){
        return await Role.count();
    }

    async delete(id){
        return await Role.findByIdAndUpdate(id,{status:false});
    }

    async findAll(page){
        page--;
        let limit = 5;
        let skip = limit*page;

        let findRoles = await Role.find({  }).populate({
            path: 'permissions',
            model: Permission
        })
        .skip(skip)
        .limit(limit)
        .exec();

        let countTotal = await this.count();

        return {
            roles:findRoles,
            count: countTotal
        } 
    }
}

module.exports = RoleBusiness;