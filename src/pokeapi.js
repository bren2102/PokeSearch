var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

const byName = (name) => {
  P.getPokemonByName(name)
    .then(function (response) {
      console.log(response.weight);
    })
    .catch(function (error) {
      console.log('There was an ERROR: ', error);
    });
}

const byEncounter = () => {
  P.getEncounterMethodByName("walk")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('There was an ERROR: ', error);
    });
}

const byType = () => {
  P.getTypeByName("ground")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('There was an ERROR: ', error);
    });
}

export { byName, byEncounter, byType }
