const db = require("../models");
const Client = db.client;

// Dodanie klienta
exports.addClient = (req, res) => {
    Client.create({
      name: req.body.name,
      surname: req.body.surname,
      phone: req.body.phone,
      email: req.body.email,
      city: req.body.city,
      street: req.body.street,
      type: req.body.type,
      peselOrNIP: req.body.peselOrNIP,
      documentID: req.body.documentID,
      other: req.body.other
    }).then(client => {
        res.send({ message: "Product was added successfully!" });
    }).catch(err => {
        res.status(500).send({ message: err.message });
      });
  };
  
// Pobierz jednego sprzedaż - przekazane do client.routers.js
exports.getClient = (req, res, next) => {
    Client.findOne({
      where: {
        //name: req.body.name // było clientname
      }
    }).then(client => {
      if (client) {
        res.status(200).send({
          data: client,
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // pobierz wszystkich użytkowników - przekazane do client.routers.js
  exports.getClients = (req, res, next) => {
    Client.findAll().then(client => {
      if (client) {
        res.status(200).send({
          data: client,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak klienta!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // pobierz uzytkownika z body by ID - przekazane do client.routers.js
  exports.getClientById = (req, res, next) => {
    Client.findOne({where: {
      id: req.body.id // było clientname
    }}).then(client => {
      if (client) {
        res.status(200).send({
          data: client,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak klienta o podanym ID!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: 'błąd: ' + err
      });
    });
  };

  // pobierz uzytkownika z parametru by ID - przekazane do client.routers.js
  exports.getClientByIdParam = (req, res, next) => {
    const id = req.params.id;
    Client.findByPk(id).then(client => {
      if (client) {
        res.status(200).send({
          data: client,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak klienta o podanym ID!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  
  // pobierz uzytkownika z body by imie, nazwisko, miasto - przekazane do client.routers.js
  exports.getClientByNameSurnameCity = (req, res, next) => {
    Client.findAll({where: {
      name: req.body.name, 
      surname: req.body.surname,
      city: req.body.city,
    }}).then(client => {
      if (client) {
        res.status(200).send({
          data: client,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak sprzedaż!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };
 
  // pobierz uzytkownika z body by imie, nazwisko, miasto - przekazane do client.routers.js
  exports.getClientByNameSurnameCityParam = (req, res, next) => {
    const name = req.params.name;
    const surname = req.params.surname;
    const city = req.params.city;
    Client.findAll({where: {
      name: name, 
      surname: surname,
      city: city,
    }}).then(client => {
      if (client) {
        res.status(200).send({
          message: "Dane!",
          data: client,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak sprzedaż!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };
 

  // usuń sprzedaż uzytkownika z body by ID - przekazane do client.routers.js
  exports.deleteClientById = (req, res, next) => {
    Client.destroy({where: {
      id: req.body.id, 
    }}).then(client => {
      if (client) {
        res.status(200).send({
          message: "Klient został usunuęty!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak klienta!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // usuń sprzedaż uzytkownika z parametry by ID - przekazane do client.routers.js
  exports.deleteClientByIdParam = (req, res, next) => {
    const id = req.params.id;
    Client.destroy({where: {
      id: id, 
    }}).then(client => {
      if (client) {
        res.status(200).send({
          message: "Klient został usunuęty!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak klienta!"
        });
        return;
        }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // update sprzedaż uzytkownika z body by ID - przekazane do client.routers.js
  exports.updateClientById = (req, res, next) => {
    Client.update(req.body,{where: {
      id: req.body.id,
    }}).then(client => {
      if (client) {
        res.status(200).send({
          message: "Klient został uaktualniony!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak klienta!"
        });
        return;
        }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // update sprzedaż uzytkownika z parametru by ID - przekazane do client.routers.js
  exports.updateClientByIdParam = (req, res, next) => {
    const id = req.params.id;
    Client.update(req.body,{where: {
      id: id, 
    }}).then(client => {
      if (client) {
        res.status(200).send({
          message: "Klient został usunuęty!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak klienta!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };
