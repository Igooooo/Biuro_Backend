const { product, client, sequelize, sales } = require("../models");
const db = require("../models");
const Sales = db.sales;
const Product = db.product;
const Client = db.client;

exports.addSales = (req, res) => {
  Sales.create({
    price:  req.body.price, 
    isPay: req.body.isPay, 
    volumen:  req.body.volumen, 
    other_1:  req.body.other_1,
    other_2:  req.body.other_2,
    productId: req.body.productId, 
    clientId:  req.body.clientId, 
  }).then(sales => {
      res.send({ message: "Sales was added successfully!" });
  }).catch(err => {
      res.status(500).send({ message: err.message });
    });
};

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

  /*
  exports.getSales = (req, res, next) => {
    Sales.findAll({
    }).then(sales => {
      if (sales) {
        console.log(sales)
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
        message: 'błąd ' + err
      });
    });
  }; */

  // pobierz wszystkich użytkowników - przekazane do sales.routers.js
  exports.getSales = (req, res, next) => {
    Sales.findAll({
      include: [{
        all:true
      }], 
    }).then(sales => {
      if (sales) {
        console.log(sales)
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
        message: 'błąd ' + err
      });
    });
  };

  // pobierz uzytkownika z body by ID - przekazane do sales.routers.js
  exports.getSaleById = (req, res, next) => {
    Sales.findOne({
      where: [{
      id: req.body.id // było salesname
    }],
    include: [{
      all:true
    }]
  }).then(sales => {
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
    Sales.findOne({
      where: [{
        id: id // było salesname
      }],
      include: [{
        all:true
      }]
    })
    .then(sales => {
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

  // pobierz sprzedaż z body by id klienta - przekazane do sales.routers.js
  exports.getSaleByClientId = (req, res, next) => {
    Sales.findAll({where: {
      client_id: req.body.client_id
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
 
  // pobierz sprzedaż z body by id klienta przekazane do sales.routers.js
  exports.getSaleByClientIdParam = (req, res, next) => {
    const client_id = req.params.client_id;
    Sales.findAll({where: {
      client_id: client_id, 
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

  // NIE DZIAŁA - problem z referencją. musi byc chyba many to meny???
  exports.getSalesWithProductAndClient = (req, res, next) => {
    Sales.findAll({
      attributes: ['id','client_id'],
      include: [{
        model: Client,
        // attributes: ['name'],
        //all: true, nested: true,
      }],
    }).then(sales => {
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
