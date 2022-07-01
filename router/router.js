var express = require("express");
var router = express.Router();
var { index } = require("../controller/index");
var { login } = require("../controller/login");
var { loginPost } = require("../controller/login");
var { register } = require("../controller/register");
var { registerPost } = require("../controller/register");
var { cam } = require("../controller/cam");

router.route("/").get(index);
router.route("/login").get(login).post(loginPost);
router.route("/register").get(register).post(registerPost);
router.route("/cam").get(cam)


module.exports = router;
