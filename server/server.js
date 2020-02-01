require('./config');
const DatabaseConfiguration = require('../config/db/index');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('../api/routes/index');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
       next();
 });
app.use('/api',routes);
var _db = new DatabaseConfiguration();


buildStatus = (res,code,message) => {
    res.status(code).json({
        fail:true,
        message
    })
};


app.listen(process.env.PORT, () => {
    console.log("Se ha iniciado, y se está escuchando en el puerto".blue, process.env.PORT);
});