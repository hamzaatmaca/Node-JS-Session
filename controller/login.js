var User = require("../model/user");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);


exports.login = (req, res) => {
  try {
    res.status(200).render("pages/login", {
      data: "Login in Here",
    });
  } catch (err) {
    res.status(500).render("pages/error");
  }
};

exports.loginPost = (req, res) => {
  try {
    const user = User.findOne(
      {
        email: req.body.email,
      },
      (err, response) => {
        if (response) {
          const passConfirm = bcrypt.compareSync(
            req.body.password,
            response.password
          );

          if (passConfirm == true) {
            req.session.email = response.email
           
            return res.redirect("/");
          } else {
            return res.status(403).render("pages/login", {
              data: "Password is Wrong",
            });
          }
        } else {
          return res.status(404).render("pages/login", {
            data: "User Not Found",
          });
        }
      }
    );
  } catch (err) {
    res.status(403).render("pages/login", {
      data: "Login Unsuccessfull",
    });
  }
};
