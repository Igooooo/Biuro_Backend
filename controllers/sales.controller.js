const db = require("../models");
const Sales = db.sales;

// Pobierz jednego sprzedaż - przekazane do sales.routers.js
exports.getSale = (req, res, next) => {
    Sales.findOne({
      where: {
        //name: req.body.name // było salesname
      }
    }).then(sales => {
      if (sales) {
        res.status(200).send({
          data: sales,
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // pobierz wszystkich użytkowników - przekazane do sales.routers.js
  exports.getSales = (req, res, next) => {
    Sales.findAll().then(sales => {
      if (sales) {
        res.status(200).send({
          data: sales,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak sprzedaży!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // pobierz uzytkownika z body by ID - przekazane do sales.routers.js
  exports.getSaleById = (req, res, next) => {
    Sales.findOne({where: {
      id: req.body.id // było salesname
    }}).then(sales => {
      if (sales) {
        res.status(200).send({
          data: sales,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak sprzedaży o podanym ID!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: 'błąd: ' + err
      });
    });
  };

  // pobierz uzytkownika z parametru by ID - przekazane do sales.routers.js
  exports.getSaleByIdParam = (req, res, next) => {
    const id = req.params.id;
    Sales.findByPk(id).then(sales => {
      if (sales) {
        res.status(200).send({
          data: sales,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak sprzedaż o podanym ID!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  /*
  // pobierz uzytkownika z body by imie, nazwisko, miasto - przekazane do sales.routers.js
  exports.getSaleByNameSurnameCity = (req, res, next) => {
    Sales.findAll({where: {
      name: req.body.name, 
      surname: req.body.surname,
      city: req.body.city,
    }}).then(sales => {
      if (sales) {
        res.status(200).send({
          data: sales,
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
 
  // pobierz uzytkownika z body by imie, nazwisko, miasto - przekazane do sales.routers.js
  exports.getSalesByNameSurnameCityParam = (req, res, next) => {
    const name = req.params.name;
    const surname = req.params.surname;
    const city = req.params.city;
    Sales.findAll({where: {
      name: name, 
      surname: surname,
      city: city,
    }}).then(sales => {
      if (sales) {
        res.status(200).send({
          message: "Dane!",
          data: sales,
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
 */

  // usuń sprzedaż uzytkownika z body by ID - przekazane do sales.routers.js
  exports.deleteSaleById = (req, res, next) => {
    Sales.destroy({where: {
      id: req.body.id, 
    }}).then(sales => {
      if (sales) {
        res.status(200).send({
          message: "Sprzedaż została usunięta!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak sprzedaży!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // usuń sprzedaż uzytkownika z parametry by ID - przekazane do sales.routers.js
  exports.deleteSaleByIdParam = (req, res, next) => {
    const id = req.params.id;
    Sales.destroy({where: {
      id: id, 
    }}).then(sales => {
      if (sales) {
        res.status(200).send({
          message: "Sprzedaż została usunięta!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak sprzedaży!"
        });
        return;
        }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // update sprzedaż uzytkownika z body by ID - przekazane do sales.routers.js
  exports.updateSaleById = (req, res, next) => {
    Sales.update(req.body,{where: {
      id: req.body.id,
    }}).then(sales => {
      if (sales) {
        res.status(200).send({
          message: "Sprzedaż została uaktualniona!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak sprzedaży!"
        });
        return;
        }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // update sprzedaż uzytkownika z parametru by ID - przekazane do sales.routers.js
  exports.updateSaleByIdParam = (req, res, next) => {
    const id = req.params.id;
    Sales.update(req.body,{where: {
      id: id, 
    }}).then(sales => {
      if (sales) {
        res.status(200).send({
          message: "Sprzedaż została usunięta!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak sprzedaży!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };
