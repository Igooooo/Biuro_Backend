// API dla User'a
const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  // Pobierz jednego użytkownika - przekazane do user.routers.js
  exports.getUser = (req, res, next) => {
    User.findOne({
      where: {
        //name: req.body.name // było username
      }
    }).then(user => {
      if (user) {
        res.status(200).send({
          data: user,
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // pobierz wszystkich użytkowników - przekazane do user.routers.js
  exports.getUsers = (req, res, next) => {
    User.findAll().then(user => {
      if (user) {
        res.status(200).send({
          data: user,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak użytkowników!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // pobierz uzytkownika z body by ID - przekazane do user.routers.js
  exports.getUserById = (req, res, next) => {
    User.findOne({where: {
      id: req.body.id // było username
    }}).then(user => {
      if (user) {
        res.status(200).send({
          data: user,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak użytkownika o podanym ID!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: 'błąd: ' + err
      });
    });
  };

  // pobierz uzytkownika z parametru by ID - przekazane do user.routers.js
  exports.getUserByIdParam = (req, res, next) => {
    const id = req.params.id;
    User.findByPk(id).then(user => {
      if (user) {
        res.status(200).send({
          data: user,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak użytkownika o podanym ID!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // pobierz uzytkownika z body by imie, nazwisko, miasto - przekazane do user.routers.js
  exports.getUserByNameSurnameCity = (req, res, next) => {
    User.findAll({where: {
      name: req.body.name, 
      surname: req.body.surname,
      city: req.body.city,
    }}).then(user => {
      if (user) {
        res.status(200).send({
          data: user,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak użytkownika!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // pobierz uzytkownika z body by imie, nazwisko, miasto - przekazane do user.routers.js
  exports.getUserByNameSurnameCityParam = (req, res, next) => {
    const name = req.params.name;
    const surname = req.params.surname;
    const city = req.params.city;
    User.findAll({where: {
      name: name, 
      surname: surname,
      city: city,
    }}).then(user => {
      if (user) {
        res.status(200).send({
          message: "Dane!",
          data: user,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak użytkownika!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // usuń użytkownika uzytkownika z body by ID - przekazane do user.routers.js
  exports.deleteUserById = (req, res, next) => {
    User.destroy({where: {
      id: req.body.id, 
    }}).then(user => {
      if (user) {
        res.status(200).send({
          message: "Użytkownik został usunięty!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak użytkownika!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // usuń użytkownika uzytkownika z parametry by ID - przekazane do user.routers.js
  exports.deleteUserByIdParam = (req, res, next) => {
    const id = req.params.id;
    User.destroy({where: {
      id: id, 
    }}).then(user => {
      if (user) {
        res.status(200).send({
          message: "Użytkownik został usunięty!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak użytkownika!"
        });
        return;
        }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // update użytkownika uzytkownika z body by ID - przekazane do user.routers.js
  exports.updateUserById = (req, res, next) => {
    User.update(req.body,{where: {
      id: req.body.id,
    }}).then(user => {
      if (user) {
        res.status(200).send({
          message: "Użytkownik został uaktualniony!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak użytkownika!"
        });
        return;
        }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // update użytkownika uzytkownika z parametru by ID - przekazane do user.routers.js
  exports.updateUserByIdParam = (req, res, next) => {
    const id = req.params.id;
    User.update(req.body,{where: {
      id: id, 
    }}).then(user => {
      if (user) {
        res.status(200).send({
          message: "Użytkownik został usunięty!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak użytkownika!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };
