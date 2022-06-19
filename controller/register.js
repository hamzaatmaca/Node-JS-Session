var User = require("../model/user");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

exports.register = (req, res) => {
    try {
      res.status(200).render("pages/register",{
        data:'Sign in Here'
      });
    } catch (err) {
      res.status(500).render("pages/error",{
        data:'There is an error'
      })
    }
  };


exports.registerPost = async (req, res) => {
  try {
    const hash = await bcrypt.hashSync(req.body.password, salt);
    
    let userObj = {
      email: req.body.email,
      password: hash,
    };

    const user = await User.create(userObj);
    
    return res.status(201).render('pages/register',{
      data:'User Has Been Created'
    })
  } catch (err) {
    res.status(403).render("pages/register",{
      data:'E-mail Has Been Using'
    })
  }
};

