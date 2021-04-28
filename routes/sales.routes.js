// API dla User
const { authJwt } = require("../middleware");
const controller = require("../controllers/sales.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Pojedyńcza sprzedaż
  app.get("/api/getSale",[authJwt.verifyToken, authJwt.isAdmin],controller.getSale);
  // Wszystkie sprzedaże
  app.get("/api/getSales",[authJwt.verifyToken, authJwt.isAdmin],controller.getSales);
  // Sprzedaż po id Body
  app.get("/api/getSaleById",[authJwt.verifyToken, authJwt.isAdmin],controller.getSaleById); 
  // Sprzedaż po id param
  app.get("/api/getSaleByIdParam/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.getSaleByIdParam); 
  // Użytkownik by Name, Surname i City
  //app.get("/api/getSaleByNameSurnameCity",[authJwt.verifyToken, authJwt.isAdmin],controller.getSaleByNameSurnameCity); 
   // Sprzedaż by Name, Surname i City param
   //app.get("/api/getSaleByNameSurnameCityParam/:name&:surname&:city",[authJwt.verifyToken, authJwt.isAdmin],controller.getSaleByNameSurnameCityParam); 
  // delate z body
  app.delete("/api/deleteSaleById",[authJwt.verifyToken, authJwt.isAdmin],controller.deleteSaleById); 
  // delate z parametry
  app.delete("/api/deleteSaleByIdParam/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.deleteSaleByIdParam);
  // update z body
  app.put("/api/updateSaleById",[authJwt.verifyToken, authJwt.isAdmin],controller.updateSaleById);
  // update z parametry
  app.put("/api/updateSaleByIdParam/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.updateSaleByIdParam);

};