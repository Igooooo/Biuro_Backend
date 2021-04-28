// Tworzenie tabeli produkt
module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      volume: {
        type: Sequelize.STRING
      },
      provider: {
        type: Sequelize.STRING
      },
      other: {
        type: Sequelize.STRING 
      }
    });
    return Product;
  };