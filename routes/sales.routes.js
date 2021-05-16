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
  // Dodanie sprzedaży
  app.post("/api/addSale",[authJwt.verifyToken, authJwt.isAdmin],controller.addSales);
  // Pojedyńcza sprzedaż
  app.get("/api/getSale",[authJwt.verifyToken, authJwt.isAdmin],controller.getSale);
  // Wszystkie sprzedaże
  app.get("/api/getSales",[authJwt.verifyToken, authJwt.isAdmin],controller.getSales);
  // Sprzedaż po id Body
  app.get("/api/getSaleById",[authJwt.verifyToken, authJwt.isAdmin],controller.getSaleById); 
  // Sprzedaż po id param
  app.get("/api/getSaleByIdParam/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.getSaleByIdParam); 
  // Sprzedaż po id klienta
  app.get("/api/getSaleByClientId",[authJwt.verifyToken, authJwt.isAdmin],controller.getSaleByClientId); 
  // Sprzedaż po id klienta param
  app.get("/api/getSaleByClientIdParam/:client_id",[authJwt.verifyToken, authJwt.isAdmin],controller.getSaleByClientIdParam); 
  // delate z body
  app.delete("/api/deleteSaleById",[authJwt.verifyToken, authJwt.isAdmin],controller.deleteSaleById); 
  // delate z parametry
  app.delete("/api/deleteSaleByIdParam/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.deleteSaleByIdParam);
  // update z body
  app.put("/api/updateSaleById",[authJwt.verifyToken, authJwt.isAdmin],controller.updateSaleById);
  // update z parametry
  app.put("/api/updateSaleByIdParam/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.updateSaleByIdParam);

};