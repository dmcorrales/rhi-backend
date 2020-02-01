class GenericBusiness {
    constructor(entity){
        this._entity = entity;
     }

    create(model){
        this._entity.save(model);
    }
    
    update(model);
    delete(model);
    get(id);
}

module.exports = GenericBusiness;