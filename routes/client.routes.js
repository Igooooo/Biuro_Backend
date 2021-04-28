// API dla Client
const { authJwt } = require("../middleware");
const controller = require("../controllers/client.controller");
const { verify } = require("../middleware");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Dodanie klienta
  app.post("/api/addClient",[verify.checkDuplicateClient],controller.addClient);
  // Pojedyńczy Klient
  app.get("/api/getClient",[authJwt.verifyToken, authJwt.isAdmin],controller.getClient);
  // Wszyscy klienci
  app.get("/api/getClients",[authJwt.verifyToken, authJwt.isAdmin],controller.getClients);
  // Klient po id Body
  app.get("/api/getClientById",[authJwt.verifyToken, authJwt.isAdmin],controller.getClientById); 
  // Klient po id param
  app.get("/api/getClientByIdParam/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.getClientByIdParam); 
  // Klient by Name, Surname i City
  app.get("/api/getClientByNameSurnameCity",[authJwt.verifyToken, authJwt.isAdmin],controller.getClientByNameSurnameCity); 
   // Klient by Name, Surname i City param
  app.get("/api/getClientByNameSurnameCityParam/:name&:surname&:city",[authJwt.verifyToken, authJwt.isAdmin],controller.getClientByNameSurnameCityParam); 
  // delate z body
  app.delete("/api/deleteClientById",[authJwt.verifyToken, authJwt.isAdmin],controller.deleteClientById); 
  // delate z parametry
  app.delete("/api/deleteClientByIdParam/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.deleteClientByIdParam);
  // update z body
  app.put("/api/updateClientById",[authJwt.verifyToken, authJwt.isAdmin],controller.updateClientById);
  // update z parametry
  app.put("/api/updateClientByIdParam/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.updateClientByIdParam);

};