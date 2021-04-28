// Tworzenie tabeli users
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      name: { 
        type: Sequelize.STRING
      },
      surname: { 
        type: Sequelize.STRING
      },
      pesel: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
    });
    return User;
  };