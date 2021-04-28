// Weryfikacja czy istnieje użytkownik

const db = require("../models");
const Client = db.client;
const Product = db.product;

checkDuplicateClient = (req, res, next) => {
  Client.findOne({
    where: {
      name: req.body.name,
      surname: req.body.surname
    }
  }).then(client => {
    if (client) {
      res.status(400).send({
        message: "Klient o podanym imieniu i nazwisku jest już w systemie!"
      });
      return;
    }
    next();
  });
  
};

checkDuplicateProduct = (req, res, next) => {
    Product.findOne({
      where: {
        name: req.body.name,
      }
    }).then(product => {
      if (product) {
        res.status(400).send({
          message: "Produkt o podanej nazwie jest już w systemie!"
        });
        return;
      }
      next();
    });
    
  };


// Funkcja sprawdzająca, ona weryfikuje użytkownika przy rejestracji
const verify = {
    checkDuplicateClient: checkDuplicateClient,
    checkDuplicateProduct: checkDuplicateProduct
};

// eskport tej funkcji
module.exports = verify;
