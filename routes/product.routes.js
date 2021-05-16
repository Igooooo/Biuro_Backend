// API dla User
const { authJwt } = require("../middleware");
const controller = require("../controllers/product.controller");
const { verify } = require("../middleware");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
    // Dodanie produktu
    app.post("/api/addProduct",[verify.checkDuplicateProduct, authJwt.verifyToken, authJwt.isAdmin],controller.addProduct);
    // Pojedyńczy produkt
    app.get("/api/getProduct",[authJwt.verifyToken, authJwt.isAdmin],controller.getProduct);
    // Wszystkie produkty
    app.get("/api/getProducts",[authJwt.verifyToken, authJwt.isAdmin],controller.getProducts);
    // Produkt po id Body
    app.get("/api/getProductById",[authJwt.verifyToken, authJwt.isAdmin],controller.getProductById); 
    // Produkt po id param
    app.get("/api/getProductByIdParam/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.getProductByIdParam); 
    // Produkt by Name, Surname i City
    app.get("/api/getProductByName",[authJwt.verifyToken, authJwt.isAdmin],controller.getProductByName); 
        // Produkt by Name, Surname i City param
    app.get("/api/getProductByNameParam/:name",[authJwt.verifyToken, authJwt.isAdmin],controller.getProductByNameParam); 
    // delate z body
    app.delete("/api/deleteProductById",[authJwt.verifyToken, authJwt.isAdmin],controller.deleteProductById); 
    // delate z parametry
    app.delete("/api/deleteProductByIdParam/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.deleteProductByIdParam);
    // update z body
    app.put("/api/updateProductById",[authJwt.verifyToken, authJwt.isAdmin],controller.updateProductById);
    // update z parametry
    app.put("/api/updateProductByIdParam/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.updateProductByIdParam);

};