const { Publication }= require('./models');
const { StringUtil } = require('../api/util');
/**
 * Publication Business
 * @author Daniel M Corrales
 * @version 1.0
 */
class PublicationBusiness {
    constructor(){
        this._stringUtil = new StringUtil();
    }

    async create(entity){
        var publication = new Publication(entity);
        publication.creation_date = new Date();
        return await publication.save();
    }

    async update(id, entity){
        return await Publication.findOneAndUpdate(id, entity, { new:true, runValidators: true });
    }

    async count(){
        return await Publication.count();
    }

    async delete(id){
        return await Publication.findByIdAndUpdate(id,{status:false});
    }
    
    async findOne(id){
        let publication = await Publication.find({id})
        .exec;
        return publication;
    }

    async findAll(page){
        page--;
        let limit = 5;
        let skip = limit*page;

        let findPublications = await Publication.find({  })
        .skip(skip)
        .limit(limit)
        .exec();

        let countTotal = await this.count();

        return {
            publications:findPublications,
            count: countTotal
        } 
    }
}

module.exports = PublicationBusiness;