const { Category }= require('./models');
const { StringUtil } = require('../api/util');
/**
 * Category Business
 * @author Daniel M Corrales
 * @version 1.0
 */
class CategoryBusiness {
    constructor(){
        this._stringUtil = new StringUtil();
    }

    async create(entity){
        var category = new Category(entity);
        return await category.save();
    }

    async update(id, entity){
        return await Category.findOneAndUpdate(id, entity, { new:true, runValidators: true });
    }

    async count(){
        return await Category.count();
    }

    async delete(id){
        return await Category.findByIdAndUpdate(id,{status:false});
    }

    async findAll(page){
        page--;
        let limit = 5;
        let skip = limit*page;

        let findCategories = await Category.find({  })
        .skip(skip)
        .limit(limit)
        .exec();

        let countTotal = await this.count();

        return {
            categories:findCategories,
            count: countTotal
        } 
    }
}

module.exports = CategoryBusiness;