const mapper = require("automapper-js");

class GenericController {
    constructor(service, dto){
        this._service = service;
        this._dto = dto;
    }

    create(req, res){
        let entity = mapper(this._dto, req.body);
        this._service.create(entity).then(response => {
            res.json(response);
        }).catch(err => {
            console.log(err)
            res.status(400);
            res.json(err.message);
        });
    }

    update(req, res){
        let entity = mapper(this._dto, req.body);
        this._service.update(req.params.id, entity).then(response => {
            res.json(response);
        }).catch(err => {
            res.status(400);
            res.json(err.message);
        });
    }

    findAll(req, res){
        let page = req.params.page;
        this._service.findAll(page).then(response => {
            res.json(response);
        }).catch(err => {
            res.status(400);
            res.json(err.message);
        });
    }

    delete(req, res){
        this._service.delete(req.params.id).then(response => {
            res.json(response);
        }).catch(err => {
            res.status(400);
            res.json(err.message);
        });
    }

    findOne(req, res){
        this._service.findOne(req.params.id).then(response => {
            res.json(response);
        }).catch(err => {
            res.status(400);
            res.json(err.message);
        });
    }
}

module.exports = GenericController;