// Weryfikacja czy istnieje użytkownik

const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Weryfikacja czy nie ma kogoś o tym name
  User.findOne({
    where: {
      name: req.body.name,
      surname: req.body.surname
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Użytkownik o podanym imieniu i nazwisku jest już w systemie!"
      });
      return;
    }

    // Weryfikacja czy nie ma kogoś o tym email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Podany adres e-mail jest już w systemie!"
        });
        return;
      }

      next();
    });
  });
};

// Sprawdza czy podana rola istnieje
checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

// Funkcja sprawdzająca, ona weryfikuje użytkownika przy rejestracji
const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

// eskport tej funkcji
module.exports = verifySignUp;
