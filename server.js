var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var router = require("./router/router");
var dotenv = require("dotenv");
var db = require("./config/db");
var bodyParser = require("body-parser");
var cors = require("cors");
var session = require('express-session');
//https://nodejs-express-session.herokuapp.com/
dotenv.config({ path: "./config/.env" });
app.use(cors());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", router);
app.get("/logout",(req,res)=>{
  req.session.destroy()
  res.redirect('login')
})
app.get('*', function(req, res){
  res.status(404).render('pages/404')
});
app.listen(PORT, () => {
  console.log(`Server is running on port -->${PORT}`);
});
