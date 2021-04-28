// API dla User
const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Testy uprawnień
  app.get("/api/test/all", controller.allAccess);
  app.get("/api/test/user",[authJwt.verifyToken],controller.userBoard);
  app.get("/api/test/mod",[authJwt.verifyToken, authJwt.isModerator],controller.moderatorBoard);
  app.get("/api/test/admin",[authJwt.verifyToken, authJwt.isAdmin],controller.adminBoard);

  // Pojedyńczy user
  app.get("/api/getUser",[authJwt.verifyToken, authJwt.isAdmin],controller.getUser);
  // Wszyscy użytkownicy
  app.get("/api/getUsers",[authJwt.verifyToken, authJwt.isAdmin],controller.getUsers);
  // Użytkownik po id Body
  app.get("/api/getUserById",[authJwt.verifyToken, authJwt.isAdmin],controller.getUserById); 
  // Użytkownik po id param
  app.get("/api/getUserByIdParam/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.getUserByIdParam); 
  // Użytkownik by Name, Surname i City
  app.get("/api/getUserByNameSurnameCity",[authJwt.verifyToken, authJwt.isAdmin],controller.getUserByNameSurnameCity); 
   // Użytkownik by Name, Surname i City param
   app.get("/api/getUserByNameSurnameCityParam/:name&:surname&:city",[authJwt.verifyToken, authJwt.isAdmin],controller.getUserByNameSurnameCityParam); 
  // delate z body
  app.delete("/api/deleteUserById",[authJwt.verifyToken, authJwt.isAdmin],controller.deleteUserById); 
  // delate z parametry
  app.delete("/api/deleteUserByIdParam/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.deleteUserByIdParam);
  // update z body
  app.put("/api/updateUserById",[authJwt.verifyToken, authJwt.isAdmin],controller.updateUserById);
  // update z parametry
  app.put("/api/updateUserByIdParam/:id",[authJwt.verifyToken, authJwt.isAdmin],controller.updateUserByIdParam);
};
