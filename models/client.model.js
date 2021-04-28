// Tworzenie tabeli klient
module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      peselOrNIP: {
        type: Sequelize.STRING
      },
      documentID: {
        type: Sequelize.STRING
      },
      other: {
        type: Sequelize.STRING
      }
    });
    return Client;
  };