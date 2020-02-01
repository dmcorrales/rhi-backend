const { PermissionModel : Permission } = require('./models/Permission');
const { StringUtil } = require('../api/util');
/**
 * Permission Business
 * @author Daniel M Corrales
 * @version 1.0
 */
class PermissionBusiness {
    constructor(){
        this._stringUtil = new StringUtil();
    }

    async create(entity){

        if(this._stringUtil.isEmpty(entity.name))
            throw new Error("El nombre de la ruta no puede estar vacío");

        if(this._stringUtil.isEmpty(entity.route))
            throw new Error("La ruta no puede estar vacía");
    
        var permission = new Permission(entity);
        return await permission.save();
    }

    async update(id, entity){
        return await Permission.findOneAndUpdate(id, entity, { new:true, runValidators: true });
    }

    async count(){
        return await Permission.count();
    }

    async delete(id){
        return await Permission.findByIdAndUpdate(id,{status:false});
    }

    async findAll(page){
        page--;
        let limit = 5;
        let skip = limit*page;

        let findPermissions = await Permission.find({  })
        .skip(skip)
        .limit(limit)
        .exec();

        let countTotal = await this.count();

        return {
            permissions:findPermissions,
            count: countTotal
        } 
    }
}

module.exports = PermissionBusiness;