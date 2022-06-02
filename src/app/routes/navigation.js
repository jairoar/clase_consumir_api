const axios = require("axios");

// Rutas para acceder al servidor
// Funcion que recibe un servidor como parametro y le asigna rutas de acceso

routes = (app) => {
  app.get("/", (req, res) => {
    axios
      .get("https://rickandmortyapi.com/api")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  });
};

module.exports = routes;
