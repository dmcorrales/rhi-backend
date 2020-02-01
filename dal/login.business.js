const { StringUtil, PasswordCryptUtil, JwtUtil } = require("../api/util");
const UserBusiness = require("./user.business");
class LoginBusiness {
    constructor(){
        this._stringUtil = new StringUtil();
        this._userBusiness = new UserBusiness();
        this._jwtUtil = new JwtUtil();
        this._passwordCryptUtil = new PasswordCryptUtil();
    }

    async login(entity){
        if(this._stringUtil.isEmpty(entity.email))
            throw new Error("El correo es vacío");

        if(this._stringUtil.isEmpty(entity.password))
            throw new Error("La contraseña es vacía");

        let user = await this._userBusiness.findByEmail(entity.email);
        if(user === null || user === undefined)
            throw new Error("Usuario y/ contraseña incorrectos");

        let isValidPassword = this._passwordCryptUtil.decrypt(entity.password, user.password);
        if(!isValidPassword)
            throw new Error("Usuario y/o contraseña incorrectos");

        let token = this._jwtUtil.createToken((await user).id);

        return {
            user,
            token
        }
    }
}

module.exports = LoginBusiness;