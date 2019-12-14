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

const container = createContainer();

container.register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
    UserController: asClass(UserController).singleton(),
    router: asFunction(routes).singleton(),
    config: asValue(config),
    UserRoutes: asFunction(UserRoutes).singleton() 
})

module.exports = container;