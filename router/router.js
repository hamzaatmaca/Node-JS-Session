var express = require("express");
var router = express.Router();
var { index } = require("../controller/index");
var { login } = require("../controller/login");
var { loginPost } = require("../controller/login");
var { register } = require("../controller/register");
var { registerPost } = require("../controller/register");

router.route("/login").get(login).post(loginPost);
router.route("/register").get(register).post(registerPost);
router.route("/").get(index);

module.exports = router;
