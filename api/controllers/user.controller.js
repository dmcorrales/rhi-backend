class UserController {
    sayHello(req, res){
        return res.send({message: 'hola perros'});
    }
}

module.exports = UserController;