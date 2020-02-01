const UserController = require("../controllers/user.controller");
const {AuthMiddleware }= require("../middlewares")
const express = require("express");
const router = express.Router();
const controller = new UserController();
const middleware = new AuthMiddleware();
router.post("/" , (req, res) => {
    controller.create(req,res);
});

router.put("/:id", (req,res) => {
    controller.update(req,res);
});

router.get("/:id", (req,res) => {
    controller.findOne(req,res);
});

router.get("/page/:page", (req,res) => {
    controller.findAll(req,res);
});

router.delete("/:id", (req,res) => {
    controller.delete(req,res);
});


module.exports = router;