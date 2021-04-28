// Tworzenie tabeli role
module.exports = (sequelize, Sequelize) => {
    const Sales = sequelize.define("sales", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      product_id: {
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.FLOAT
      },
      isPay: {
        type: Sequelize.INTEGER
      },
      volumen: {
        type: Sequelize.INTEGER
      },
      other_1: {
        type: Sequelize.STRING
      },
      other_2: {
        type: Sequelize.STRING
      }
    });
    return Sales;
  };