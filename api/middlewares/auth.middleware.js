const { JwtUtil } = require('../util');
class AuthMiddleware{

    constructor(){
        this._jwtUtil = new JwtUtil();
    }

    validateToken(req, res, next){
        let token = req.get("Authorization");
        let decoded = new JwtUtil().validate(token , process.env.SEED);
     
        if(!decoded){
            res.status(401);
            res.json('Invalid authorization');
        }else{
            req.id = decoded.id;
            next();
        }

        
    }
}

module.exports = AuthMiddleware;