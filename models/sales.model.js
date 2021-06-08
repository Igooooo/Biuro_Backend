// Tworzenie tabeli role
module.exports = (sequelize, Sequelize) => {
    const Sales = sequelize.define("sales", {
      /*product_id: {
        type: Sequelize.INTEGER,
        references: {         // User belongsTo Company 1:1
          model: 'products',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade' 
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {         // User belongsTo Company 1:1
          model: 'clients',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade' 
      }, */
      price: {
        type: Sequelize.FLOAT
      },
      isPay: {
        type: Sequelize.STRING
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
    })
    /*
   Sales.associate = models => {
    models.Sales.belongsTo(models.Client, {
      foreignKey: {
        allowNull: false
      }
    }) 
  }
  Sales.associate = models => {
    models.Sales.belongsTo(models.Procuct, {
      foreignKey: {
        allowNull: false
      }
    })
  } */
    return Sales;
  };
