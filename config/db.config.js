require('dotenv').config()

// Konfiguraca bazy danych
module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    DB: process.env.DB_NAME,
    PORT: process.env.DB_PORT,
    dialect: "mysql",
    pool: {
      max: 5, // maximum number of connection in pool
      min: 0, // minimum number of connection in pool
      acquire: 30000, //  maximum time, in milliseconds, that a connection can be idle before being released
      idle: 10000 // maximum time, in milliseconds, that pool will try to get connection before throwing error
    }
  }; 