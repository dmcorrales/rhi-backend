const { LoginService } = require("../services");
const { LoginDto } = require("../dtos");
const mapper = require("automapper-js");
class LoginController{
    constructor(){
        this._loginService = new LoginService();
    }

    login(req,res){
        let entity = mapper(LoginDto, req.body);
        this._loginService.login(entity).then(response => {
            res.json(response);
        }).catch(e => {
            res.json(e.message);
        });
    }
}

module.exports = LoginController;