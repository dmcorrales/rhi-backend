const jwt = require("jsonwebtoken");
class JwtHelper{
    constructor(){}

    createToken(__id){
        return jwt.sign({
          id: __id,
        }, process.env.SEED, { expiresIn: '1h' });
    }

    validate(token, SEED){
      return jwt.verify(token, SEED);
    }
}

module.exports = JwtHelper;