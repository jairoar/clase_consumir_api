const axios = require("axios");
Utils = {}; // objeto que contendra las funciones de utilidades

getCharacterById = async (characterId) => {
  let res = {};
  await axios
    .get(`https://rickandmortyapi.com/api/character/${characterId}`)
    .then(function (response) {
      // handle success
      res = response;
    })
    .catch(function (error) {
      // handle error
      res = { data: { error: error } };
    });
  return res;
};

Utils.getCharacterById = getCharacterById;
module.exports = Utils;
