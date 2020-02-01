const express = require("express");
const router = express.Router();
const { LoginController } = require('../controllers');
const controller = new LoginController();

router.post("/", (req, res) => {
    controller.login(req,res);
});

module.exports = router;