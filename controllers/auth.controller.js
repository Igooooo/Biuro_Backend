// Autoryzacja, logowanie, rejestracja
const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


// Dodanie nowego user'a do bazy danych - rejestracja
exports.signup = (req, res) => {
  User.create({
    name: req.body.name,
    surname: req.body.surname,
    pesel: req.body.pesel,
    city: req.body.city,
    street: req.body.street,
    phone: req.body.phone,
    email: req.body.email,
    type: req.body.type,
    password: bcrypt.hashSync(req.body.password, 8), // hashSync nie powinno sie uzywac - lepiej asynchronicznie to robic
  }) // Dodawanie jemu roli
    .then(user => { // Zakomentowane dodawanie roli z wyboru, teraz automatycznie dodawana jest rola id = 1
      /*if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else { */
        // user role = 1
        user.setRoles([3]).then(() => { // domyslne przydzielenie roli
          res.send({ message: "User was registered successfully!" });
        });
      //}
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// LOGOWANIE
exports.signin = (req, res) => {
  User.findOne({
    where: { 
      email: req.body.email
    }
  }) // Sprawdzanie czy jest taki użytkownik w bazie
    .then(user => { 
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      // Walidacja hasła
      var passwordIsValid = bcrypt.compareSync(req.body.password,user.password);
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid password'
        });
      }
      // Rzeczy przekazywane w tokenie
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 86400 24 hours - czas wygaśniecie tokenu. Czas w sekundach
      });
      // Odczytanie roli usera
      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase()); // odczytanie z tabeli 
        }
        // Przesłanie rzeczy poza tokenem, widoczne dla każdego
        res.status(200).send({
          id: user.id,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    }); 
};

