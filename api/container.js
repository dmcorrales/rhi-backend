/*
* Container
* Define default exports for construct operations
*/
const { asClass, createContainer, asFunction, asValue } = require('awilix');
const StartUp = require("./startup");
const Server = require("./server");
const { UserController } = require("../api/controllers");
const routes = require("../api/routes")
const config = require("../config/environments");
const UserRoutes = require("../api/routes/user.routes")
const {UserBusiness} = require("../dal/index");
const {UserService} = require("../services/index")
const container = createContainer();
//APP 
container
.register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
    router: asFunction(routes).singleton(),
    UserController: asClass(UserController).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton() 
})
//Configuration
.register({
    config: asValue(config),
})
//Database
.register({})
//Services
.register({
   UserService : asClass(UserService).singleton()
})
//Repository
.register({})
//Business
.register({
    UserBusiness : asClass(UserBusiness).singleton()
})
module.exports = container;