const db = require("../models");
const Product = db.product;

// Dodanie klienta
exports.addProduct = (req, res) => {
    Product.create({
      name: req.body.name,
      type: req.body.type,
      volume: req.body.volume,
      provider: req.body.provider,
      other: req.body.other
    }).then(product => {
        res.send({ message: "Product was added successfully!" });
    }).catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

// Pobierz jednego sprzedaż - przekazane do product.routers.js
exports.getProduct = (req, res, next) => {
    Product.findOne({
      where: {
        //name: req.body.name // było productname
      }
    }).then(product => {
      if (product) {
        res.status(200).send({
          data: product,
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // pobierz wszystkich użytkowników - przekazane do product.routers.js
  exports.getProducts = (req, res, next) => {
    Product.findAll().then(product => {
      if (product) {
        res.status(200).send({
          data: product,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak produktu!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // pobierz uzytkownika z body by ID - przekazane do product.routers.js
  exports.getProductById = (req, res, next) => {
    Product.findOne({where: {
      id: req.body.id // było productname
    }}).then(product => {
      if (product) {
        res.status(200).send({
          data: product,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak produktu o podanym ID!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: 'błąd: ' + err
      });
    });
  };

  // pobierz uzytkownika z parametru by ID - przekazane do product.routers.js
  exports.getProductByIdParam = (req, res, next) => {
    const id = req.params.id;
    Product.findByPk(id).then(product => {
      if (product) {
        res.status(200).send({
          data: product,
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak produktu o podanym ID!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  
  // pobierz uzytkownika z body by imie, nazwisko, miasto - przekazane do product.routers.js
  exports.getProductByName = (req, res, next) => {
    Product.findAll({where: {
      name: req.body.name, 
    }}).then(product => {
      if (product) {
        res.status(200).send({
          data: product,
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
 
  // pobierz uzytkownika z body by imie, nazwisko, miasto - przekazane do product.routers.js
  exports.getProductByNameParam = (req, res, next) => {
    const name = req.params.name;
    Product.findAll({where: {
      name: name, 
    }}).then(product => {
      if (product) {
        res.status(200).send({
          message: "Dane!",
          data: product,
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
 

  // usuń sprzedaż uzytkownika z body by ID - przekazane do product.routers.js
  exports.deleteProductById = (req, res, next) => {
    Product.destroy({where: {
      id: req.body.id, 
    }}).then(product => {
      if (product) {
        res.status(200).send({
          message: "Produkt został usunuęty!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak produktu!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // usuń sprzedaż uzytkownika z parametry by ID - przekazane do product.routers.js
  exports.deleteProductByIdParam = (req, res, next) => {
    const id = req.params.id;
    Product.destroy({where: {
      id: id, 
    }}).then(product => {
      if (product) {
        res.status(200).send({
          message: "Produkt został usunuęty!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak produktu!"
        });
        return;
        }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // update sprzedaż uzytkownika z body by ID - przekazane do product.routers.js
  exports.updateProductById = (req, res, next) => {
    Product.update(req.body,{where: {
      id: req.body.id,
    }}).then(product => {
      if (product) {
        res.status(200).send({
          message: "Produkt został uaktualniony!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak produktu!"
        });
        return;
        }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };

  // update sprzedaż uzytkownika z parametru by ID - przekazane do product.routers.js
  exports.updateProductByIdParam = (req, res, next) => {
    const id = req.params.id;
    Product.update(req.body,{where: {
      id: id, 
    }}).then(product => {
      if (product) {
        res.status(200).send({
          message: "Produkt został usunuęty!"
        });
        return;
      } else {
        res.status(400).send({
          message: "Brak produktu!"
        });
        return;
      }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
    });
  };
