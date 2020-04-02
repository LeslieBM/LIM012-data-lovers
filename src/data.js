export const sortArray = (arr, condition) => {
  let arrPokemon = [];
  if (condition === 'upward') {
    arrPokemon = arr.sort((a, b) => a.num - b.num);
  } else if (condition === 'falling') {
    arrPokemon = arr.sort((a, b) => b.num - a.num);
  } else if (condition === 'sortAz') {
    arrPokemon = arr.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  } else {
    arrPokemon = arr.sort((a, b) => {
      if (b.name > a.name) {
        return 1;
      } if (b.name < a.name) {
        return -1;
      }
      return 0;
    });
  }
  return arrPokemon;
};
  // filtrar por km
export const filterKm = (arr, condition) => {
  let arrFilterKM = [];
  if (condition === 'oneKm') {
    arrFilterKM = arr.filter(object => object['buddy-distance-km'] === '1');
  } else if (condition === 'threeKm') {
    arrFilterKM = arr.filter(object => object['buddy-distance-km'] === '3');
  } else if (condition === 'fiveKm') {
    arrFilterKM = arr.filter(object => object['buddy-distance-km'] === '5');
  } else if (condition === 'twentyKm') {
    arrFilterKM = arr.filter(object => object['buddy-distance-km'] === '20');
  }
  return arrFilterKM;
};
export const sortPower = (arr, condition) => {
  let arrPokemonPower = [];
  if (condition === 'atack') {
    arrPokemonPower = arr.sort((a, b) => b.stats['base-attack'] - a.stats['base-attack']);
  } else if (condition === 'defense') {
    arrPokemonPower = arr.sort((a, b) => b.stats['base-defense'] - a.stats['base-defense']);
  } else if (condition === 'health') {
    arrPokemonPower = arr.sort((a, b) => b.stats['base-stamina'] - a.stats['base-stamina']);
  } else if (condition === 'maxCp') {
    arrPokemonPower = arr.sort((a, b) => b.stats['max-cp'] - a.stats['max-cp']);
  } else {
    arrPokemonPower = arr.sort((a, b) => b.stats['max-hp'] - a.stats['max-hp']);
  }
  return arrPokemonPower;
};
export const compareOnePokemon = (arr, condition) => {
  const arrFilterName = arr.filter(object => object.name === condition);
  return arrFilterName;
};
export const compareTwoPokemon = (arr, condition) => {
  const arrFilterName = arr.filter(object => object.name === condition);
  return arrFilterName;
};
  // buscador
export const searchPokemon = (arr, condition) => {
  const pokemon = arr.filter(object => (object.name).indexOf(condition) === 0);
  return pokemon;
};
export const mainSearchPokemon = (arr, input) => {
  const pokemon = arr.filter(obj => obj.name.startsWith(input.toLowerCase()));
  return pokemon;
};
