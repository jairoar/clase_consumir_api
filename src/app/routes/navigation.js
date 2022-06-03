const utils = require("./utils.js");

// Rutas para acceder al servidor
// Funcion que recibe un servidor como parametro y le asigna rutas de acceso

routes = (app) => {
  app.get("/", async (req, res) => {
    character = await utils.getCharacterById("1");
    character = character.data;
    res.render("../views/characters.ejs", {
      imagen: character.image,
      nombre: character.name,
      especie: character.species,
      estatus: character.status,
      genero: character.gender,
    });
  });
};

module.exports = routes;
