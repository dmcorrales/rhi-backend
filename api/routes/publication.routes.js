const { PublicationController } = require("../controllers");
const {AuthMiddleware }= require("../middlewares")
const express = require("express");
const router = express.Router();
const controller = new PublicationController();
const middleware = new AuthMiddleware();

router.post("/" , (req, res) => {
    controller.create(req,res);
});

router.put("/:id", (req,res) => {
    controller.update(req,res);
});

router.get("/page/:page", (req,res) => {
    controller.findAll(req,res);
});

router.get("/:id", (req,res) => {
    controller.findOne(req,res);
});


router.delete("/:id", (req,res) => {
    controller.delete(req,res);
});

module.exports = router;