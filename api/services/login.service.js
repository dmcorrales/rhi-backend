const { LoginBusiness } = require("../../dal");

class LoginService {
    constructor(){
        this._loginBusiness = new LoginBusiness();
    }

    async login(entity){
        return await this._loginBusiness.login(entity);
    }
}

module.exports = LoginService;