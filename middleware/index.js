const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");
const verify = require("./verify");

// Przesłanie authJwt - Role oraz verifySignUp - weryfikacja logowania
module.exports = {
  authJwt,
  verifySignUp,
  verify
};
