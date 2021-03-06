const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const SequelizeView = require('sequelize-views-support');

console.log(config.DB);
// Logowanie do bazy danych
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.SequelizeView = SequelizeView;

// tworzenie tabeli z modeli
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.sales = require("../models/sales.model.js")(sequelize, Sequelize);
db.product = require("../models/product.model.js")(sequelize, Sequelize);
db.client = require("../models/client.model.js")(sequelize, Sequelize);

// Tworzenie relacji potrzebnych do zalogowani się user_roles
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
  as: "roles"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
  as: "roles"
});

/*
db.client.belongsToMany(db.product, {
  through: "sales",
  foreignKey: "client_id",
  otherKey: "product_id",
  as: "sale"
});
db.product.belongsToMany(db.client, {
  through: "sales",
  foreignKey: "product_id",
  otherKey: "client_id",
  as: "sale"
});
*/
db.sales.belongsTo(db.product);
db.sales.belongsTo(db.client);
db.client.hasMany(db.sales)
db.product.hasMany(db.sales)

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;