import {
  sortArray, filterKm, sortPower, compareOnePokemon, searchPokemon, mainSearchPokemon,
} from './data.js';
import data from './data/pokemon/pokemon.js';

const arrPokemon = data.pokemon;
// --------------------------------------------------------------------------------
const showPokemon = (arr) => {
  let pokList = '';
  for (let i = 0; i < arr.length; i += 1) {
    pokList += `
    <div class="conteinerPokemon">
      <img src="${arr[i].img}">
      <p>N°${arr[i].num}</p>
      <p class="name">${arr[i].name}</p>
        <p class="type">${arr[i].type}</p>
    </div>`;
  }
  document.getElementById('pokemonList').innerHTML = pokList;
};
const loadPokedex = () => {
  showPokemon(arrPokemon);
  document.getElementById('getCandy').classList.add('ocultar');
  document.getElementById('powerData').classList.add('ocultar');
  document.getElementById('comparePokemon').classList.add('ocultar');
};
window.addEventListener('load', loadPokedex);

document.querySelector('#showPokedex').addEventListener('click', () => {
  document.getElementById('getCandy').classList.add('ocultar');
  document.getElementById('powerData').classList.add('ocultar');
  document.getElementById('pokedex').classList.remove('ocultar');
  showPokemon(sortArray(arrPokemon, 'upward'));
});
// Ordenado Nombre - Numero
const orderArray = document.querySelector('#dropDown');
orderArray.addEventListener('change', () => {
  const orderSelect = orderArray.value;
  document.getElementById('pokemonList').innerHTML = '';
  showPokemon(sortArray(arrPokemon, orderSelect));
});
// --------------------------------------------------------------------------------
const showPokemon2 = (arr) => {
  let pokList2 = '';
  for (let i = 0; i < arr.length; i += 1) {
    pokList2 += `
        <div class="conteinerPokemon">
          <img src="${arr[i].img}">
          <p>N°${arr[i].num}</p>
          <p class="name">${arr[i].name}</p>
          <p class="km">${arr[i]['buddy-distance-km']} Km</p>
          <p class="type">${arr[i].type}</p>
        </div>`;
  }
  document.getElementById('pokemonList2').innerHTML = pokList2;
};
document.querySelector('#showGetCandy').addEventListener('click', () => {
  document.getElementById('pokedex').classList.add('ocultar');
  document.getElementById('powerData').classList.add('ocultar');
  document.getElementById('getCandy').classList.remove('ocultar');
  document.getElementById('total').innerHTML = '';
  showPokemon2(sortArray(arrPokemon, 'upward'));
});
// filtrar por km
const filterArray = document.querySelector('#filterCandy');
filterArray.addEventListener('change', () => {
  const filterSelect = filterArray.value;
  document.getElementById('total').innerHTML = '';
  document.getElementById('pokemonList2').innerHTML = '';
  const totalKm = filterKm(arrPokemon, filterSelect).length;
  document.getElementById('total').innerHTML = `N° pokemones: ${totalKm}`;
  showPokemon2(filterKm(arrPokemon, filterSelect));
});

document.querySelector('#showComparePokemon').addEventListener('click', () => {
  document.getElementById('getCandy').classList.add('ocultar');
  document.getElementById('pokedex').classList.add('ocultar');
  document.getElementById('powerData').classList.add('ocultar');
  document.getElementById('comparePokemon').classList.remove('ocultar');
});
// Sugerencia del buscador 1
const searchPokemon1 = document.getElementById('searchPokemon1');
searchPokemon1.addEventListener('keyup', () => {
  const inputNameSelect = searchPokemon1.value.toLowerCase();
  if (searchPokemon1.value !== '') {
    document.getElementById('showListpokemon1').innerHTML = '';
    for (let i = 0; i < searchPokemon(arrPokemon, inputNameSelect).length; i += 1) {
      document.getElementById('showListpokemon1').innerHTML += `
        <li class="li">${searchPokemon(arrPokemon, inputNameSelect)[i].name}</li>
        `;
    }
  }
  if (searchPokemon1.value === '') {
    document.getElementById('showListpokemon1').innerHTML = '';
  }
});
// Sugerencia del buscador 2
const searchPokemon2 = document.getElementById('searchPokemon2');
searchPokemon2.addEventListener('keyup', () => {
  const inputNameSelect = searchPokemon2.value.toLowerCase();
  if (searchPokemon2.value !== '') {
    document.getElementById('showListpokemon2').innerHTML = '';
    for (let i = 0; i < searchPokemon(arrPokemon, inputNameSelect).length; i += 1) {
      document.getElementById('showListpokemon2').innerHTML += `
        <li class="li">${searchPokemon(arrPokemon, inputNameSelect)[i].name}</li>
        `;
    }
  }
  if (searchPokemon2.value === '') {
    document.getElementById('showListpokemon2').innerHTML = '';
  }
});
// mostrar datos de comparacion
const showComparePokemon = (arr) => {
  const pokemonOne = `
    <div class="conteinerPokemonCompare">
      <img src="${arr[0].img}">
      <p>N°${arr[0].num}</p>
      <p class="name">${arr[0].name}</p>
    </div>
    <div>
      <p>Resistencias: ${arr[0].resistant}</p>
      <p>Debilidades: ${arr[0].weaknesses}</p>
    </div>`;
  document.getElementById('showPokemon1').innerHTML = pokemonOne;
};
const showCompareTableMove = (arr) => {
  document.getElementById('table1Pokemon1').innerHTML += `
  <tr>
    <th>Tipo de pokemon</th>
    <th>Tipo de Movimiento</th>
    <th>Movimineto</th>
    <th>STAB</th>
    <th>DPS</th>
    <th>EPS</th>
  </tr>`;
  for (let i = 0; i < arr[0].type.length; i += 1) {
    for (let j = 0; j < arr[0]['quick-move'].length; j += 1) {
      let stab;
      const baseDamage = parseInt((arr[0]['quick-move'][j]['base-damage']), 10);
      const energy = parseFloat((arr[0]['quick-move'][j].energy), 10);
      const time = parseFloat((arr[0]['quick-move'][j]['move-duration-seg']), 10);
      if (arr[0].type[i] === arr[0]['quick-move'][j].type) {
        stab = baseDamage + (baseDamage * 0.2);
      } else {
        stab = baseDamage;
      }
      document.getElementById('table1Pokemon1').innerHTML += `
          <tr>
            <td>${arr[0].type[i]}</td>
            <td>${arr[0]['quick-move'][j].type}</td>
            <td>${arr[0]['quick-move'][j].name}</td>
            <td>${Math.round(stab * 100) / 100}</td>
            <td>${Math.round((baseDamage / stab) * 100) / 100}</td>
            <td>${Math.round((energy / time) * 100) / 100}</td>
          </tr>`;
    }
  }
};
const showCompareTableAttack = (arr) => {
  document.getElementById('table2Pokemon1').innerHTML += `
  <tr>
    <th>Tipo de pokemon</th>
    <th>Tipo de Movimiento</th>
    <th>Ataque</th>
    <th>STAB</th>
    <th>DPS</th>
    <th>EPS</th>
  </tr>`;
  for (let i = 0; i < arr[0].type.length; i += 1) {
    for (let j = 0; j < arr[0]['special-attack'].length; j += 1) {
      let stab;
      const baseDamage = parseInt((arr[0]['special-attack'][j]['base-damage']), 10);
      const energy = parseFloat((arr[0]['special-attack'][j].energy), 10);
      const time = parseFloat((arr[0]['special-attack'][j]['move-duration-seg']), 10);
      if (arr[0].type[i] === arr[0]['special-attack'][j].type) {
        stab = baseDamage + (baseDamage * 0.2);
      } else {
        stab = baseDamage;
      }
      document.getElementById('table2Pokemon1').innerHTML += `
          <tr>
            <td>${arr[0].type[i]}</td>
            <td>${arr[0]['special-attack'][j].type}</td>
            <td>${arr[0]['special-attack'][j].name}</td>
            <td>${Math.round(stab * 100) / 100}</td>
            <td>${Math.round((baseDamage / stab) * 100) / 100}</td>
            <td>${Math.round((energy / time) * 100) / 100}</td>
          </tr>`;
    }
  }
};
const showComparePokemon2 = (arr) => {
  const pokemonOne = `
    <div class="conteinerPokemonCompare">
      <img src="${arr[0].img}">
      <p>N°${arr[0].num}</p>
      <p class="name">${arr[0].name}</p>
    </div>
    <div>
      <p>Resistencias: ${arr[0].resistant}</p>
      <p>Debilidades: ${arr[0].weaknesses}</p>
    </div>`;
  document.getElementById('showPokemon2').innerHTML = pokemonOne;
};
const showCompareTableMove2 = (arr) => {
  document.getElementById('table1Pokemon2').innerHTML += `
  <tr>
    <th>Tipo de pokemon</th>
    <th>Tipo de Movimiento</th>
    <th>Movimineto</th>
    <th>STAB</th>
    <th>DPS</th>
    <th>EPS</th>
  </tr>`;
  for (let i = 0; i < arr[0].type.length; i += 1) {
    for (let j = 0; j < arr[0]['quick-move'].length; j += 1) {
      let stab;
      const baseDamage = parseInt((arr[0]['quick-move'][j]['base-damage']), 10);
      const energy = parseFloat((arr[0]['quick-move'][j].energy), 10);
      const time = parseFloat((arr[0]['quick-move'][j]['move-duration-seg']), 10);
      if (arr[0].type[i] === arr[0]['quick-move'][j].type) {
        stab = baseDamage + (baseDamage * 0.2);
      } else {
        stab = baseDamage;
      }
      document.getElementById('table1Pokemon2').innerHTML += `
          <tr>
            <td>${arr[0].type[i]}</td>
            <td>${arr[0]['quick-move'][j].type}</td>
            <td>${arr[0]['quick-move'][j].name}</td>
            <td>${Math.round(stab * 100) / 100}</td>
            <td>${Math.round((baseDamage / stab) * 100) / 100}</td>
            <td>${Math.round((energy / time) * 100) / 100}</td>
          </tr>`;
    }
  }
};
const showCompareTableAttack2 = (arr) => {
  document.getElementById('table2Pokemon2').innerHTML += `
  <tr>
    <th>Tipo de pokemon</th>
    <th>Tipo de Movimiento</th>
    <th>Ataque</th>
    <th>STAB</th>
    <th>DPS</th>
    <th>EPS</th>
  </tr>`;
  for (let i = 0; i < arr[0].type.length; i += 1) {
    for (let j = 0; j < arr[0]['special-attack'].length; j += 1) {
      let stab;
      const baseDamage = parseInt((arr[0]['special-attack'][j]['base-damage']), 10);
      const energy = parseFloat((arr[0]['special-attack'][j].energy), 10);
      const time = parseFloat((arr[0]['special-attack'][j]['move-duration-seg']), 10);
      if (arr[0].type[i] === arr[0]['special-attack'][j].type) {
        stab = baseDamage + (baseDamage * 0.2);
      } else {
        stab = baseDamage;
      }
      document.getElementById('table2Pokemon2').innerHTML += `
          <tr>
            <td>${arr[0].type[i]}</td>
            <td>${arr[0]['special-attack'][j].type}</td>
            <td>${arr[0]['special-attack'][j].name}</td>
            <td>${Math.round(stab * 100) / 100}</td>
            <td>${Math.round((baseDamage / stab) * 100) / 100}</td>
            <td>${Math.round((energy / time) * 100) / 100}</td>
          </tr>`;
    }
  }
};
document.querySelector('#twoPokemon').addEventListener('click', () => {
  document.getElementById('showListpokemon1').innerHTML = '';
  document.getElementById('showListpokemon2').innerHTML = '';
  const inputNameSelect1 = document.getElementById('searchPokemon1').value.toLowerCase();
  const inputNameSelect2 = document.getElementById('searchPokemon2').value.toLowerCase();
  showComparePokemon(compareOnePokemon(arrPokemon, inputNameSelect1));
  showCompareTableMove(compareOnePokemon(arrPokemon, inputNameSelect1));
  showCompareTableAttack(compareOnePokemon(arrPokemon, inputNameSelect1));
  showComparePokemon2(compareOnePokemon(arrPokemon, inputNameSelect2));
  showCompareTableMove2(compareOnePokemon(arrPokemon, inputNameSelect2));
  showCompareTableAttack2(compareOnePokemon(arrPokemon, inputNameSelect2));
});
// --------------------------------------------------------------------------------
// Datos de poder
const dataPower = (arr, selectPower) => {
  let power;
  if (selectPower === 'atack') {
    power = 'Ataque';
  } else if (selectPower === 'defense') {
    power = 'Defensa';
  } else if (selectPower === 'health') {
    power = 'Salud';
  } else if (selectPower === 'maxCp') {
    power = 'Max CP';
  } else {
    power = 'Max Hp';
  }
  let pokList = '';
  pokList += `
      <tr>
        <th>N° Pokedex</th>
        <th>Nombre</th>
        <th>${power}</th>
      </tr>`;
  for (let i = 0; i < arr.length; i += 1) {
    pokList += `
      <tr>
        <td>${arr[i].num}</td>
        <td><img class='pokeImage' src=${arr[i].img}>${arr[i].name}</td>`;
    if (selectPower === 'atack') {
      pokList += `
          <td>${arr[i].stats['base-attack']}</td>
        </tr>`;
    } else if (selectPower === 'defense') {
      pokList += `
          <td>${arr[i].stats['base-defense']}</td>
        </tr>`;
    } else if (selectPower === 'health') {
      pokList += `
          <td>${arr[i].stats['base-stamina']}</td>
        </tr>`;
    } else if (selectPower === 'maxCp') {
      pokList += `
          <td>${arr[i].stats['max-cp']}</td>
        </tr>`;
    } else {
      pokList += `
          <td>${arr[i].stats['max-hp']}</td>
        </tr>`;
    }
  }
  document.getElementById('powerTable').innerHTML = pokList;
};
document.querySelector('#showPowerData').addEventListener('click', () => {
  document.getElementById('pokedex').classList.add('ocultar');
  document.getElementById('getCandy').classList.add('ocultar');
  document.getElementById('comparePokemon').classList.add('ocultar');
  document.getElementById('powerData').classList.remove('ocultar');
  dataPower(sortPower(arrPokemon, 'atack'), 'atack');
});
// Datos de poder
const sortPowerArray = document.querySelector('#sortPower');
sortPowerArray.addEventListener('change', () => {
  const powerSelect = sortPowerArray.value;
  document.getElementById('powerTable').innerHTML = '';
  dataPower(sortPower(arrPokemon, powerSelect), powerSelect);
});
// --------------------------------------------------------------------------------
// Buscador
// evento keyup se dispara cuando se suelta una tecla
const enterName = document.getElementById('search');

enterName.addEventListener('keyup', () => {
  showPokemon(mainSearchPokemon(arrPokemon, enterName.value));
});
