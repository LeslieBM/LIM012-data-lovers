import {
  sortArray, filterKm, sortPower, comparePokemon, searchPokemon,
} from './data.js';
import data from './data/pokemon/pokemon.js';

const arrPokemon = data.pokemon;

const showPokemonDescription = document.getElementById('showDescription');
const pokemonList = document.getElementById('pokemonList');
// --------------------------------------------------------------------------------
const pokemonType = (arr) => {
  let typesPoke = '';
  for (let i = 0; i < arr.type.length; i += 1) {
    typesPoke += `<span class="type${arr.type[i]}" >${arr.type[i]}</span>&nbsp&nbsp&nbsp`;
  }
  return typesPoke;
};
const showDescription = (arr) => {
  let evolution = '';
  evolution += `<div>
                  <img src="https://www.serebii.net/pokemongo/pokemon/${arr.num}.png">
                  <p>${arr.name}</p>
                </div>`;
  if (arr.evolution['prev-evolution'] !== undefined) {
    evolution += `<div class="contentArrowImage"><img src="flecha.png" class="arrowImage"></div>
                  <div>
                    <img src="https://www.serebii.net/pokemongo/pokemon/${arr.evolution['prev-evolution'][0].num}.png">
                    <p>${arr.evolution['prev-evolution'][0].name}</p>
                  </div>
                  `;
    if (arr.evolution['prev-evolution'][0]['prev-evolution'] !== undefined) {
      evolution += `<div class="contentArrowImage"><img src="flecha.png" class="arrowImage"></div>
                    <div>
                      <img src="https://www.serebii.net/pokemongo/pokemon/${arr.evolution['prev-evolution'][0]['prev-evolution'][0].num}.png">
                      <p>${arr.evolution['prev-evolution'][0]['prev-evolution'][0].name}</p>
                    </div>`;
    }
  }
  if (arr.evolution['next-evolution'] !== undefined) {
    evolution += `<div class="contentArrowImage"><img src="flecha.png" class="arrowImage"></div>
                  <div>
                    <img src="https://www.serebii.net/pokemongo/pokemon/${arr.evolution['next-evolution'][0].num}.png">
                    <p>${arr.evolution['next-evolution'][0].name}</p>
                  </div>`;
    if (arr.evolution['next-evolution'][0]['next-evolution'] !== undefined) {
      evolution += `<div class="contentArrowImage"><img src="flecha.png" class="arrowImage"></div>
                    <div>
                      <img src="https://www.serebii.net/pokemongo/pokemon/${arr.evolution['next-evolution'][0]['next-evolution'][0].num}.png">
                      <p>${arr.evolution['next-evolution'][0]['next-evolution'][0].name}</p>
                    </div>`;
    }
  }
  if (arr.evolution['prev-evolution'] === undefined && arr.evolution['next-evolution'] === undefined) {
    evolution += '<p>El pokemon no tiene evoluviones</p>';
  }
  const infoPokemon = document.createElement('div');
  infoPokemon.setAttribute('class', 'showDescriptionPokemon');
  infoPokemon.innerHTML = `
    <div class="containerDescription">
      <div class="datesPokemon">
          <p class="titleContainer">N° ${arr.num}  ${arr.name}</p>
          <div class="sectionImage"><img class="imageContainer" src="${arr.img}"></div>
      </div>
      <div class="datesPokemon2">
        <h1 class="descriptionPokemon">
          <div class="pokemonType"><p class="boldFont">Tipo: </p>${pokemonType(arr)}</div>
          <div class="pokemonDescription"><p class="boldFont">Descripcion:</p>${arr.about}</div>
        </h1>
        <div class="dates">
          <h1 class="dates1">
            <p class="fonts">Altura: ${arr.size.height}</p>
            <p class="fonts">Peso: ${arr.size.weight}</p>
            <p class="fonts">Huevo: ${arr.egg}</p>
          </h1>
          <h1 class="dates2">
            <p class="fonts">Ratio de aparicion: ${arr['spawn-chance']}</p>
            <p class="fonts">Ratio de captura Base: ${arr.encounter['base-flee-rate']}</p>
            <p class="fonts">Ratio de huida: ${arr.encounter['base-capture-rate']}</p>
          </h1>
        </div>
      </div>
    </div>
    <div class="evolutionPokemon">${evolution}</div>
    <div class="btnRegresar"><button id="regresar" class="btnGet">Regresar</button></div>`;
  return infoPokemon;
};
const showPokemon = (arr) => {
  pokemonList.innerHTML = '';
  for (let i = 0; i < arr.length; i += 1) {
    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'conteinerPokemon');
    divElement.innerHTML = `
      <a id="${arr[i].num}">
        <img src="${arr[i].img}">
        <p>N°${arr[i].num}</p>
        <p class="name">${arr[i].name}</p>
        <p class="type">${pokemonType(arr[i])}</p>
      </a>`;
    divElement.addEventListener('click', () => {
      showPokemonDescription.innerHTML = '';
      showPokemonDescription.classList.remove('ocultar');
      document.getElementById('pokedex').classList.add('ocultar');
      showPokemonDescription.appendChild(showDescription(arr[i]));
      const regresar = document.getElementById('regresar');
      regresar.addEventListener('click', () => {
        showPokemonDescription.innerHTML = '';
        showPokemonDescription.classList.add('ocultar');
        document.getElementById('pokedex').classList.remove('ocultar');
      });
    });
    pokemonList.appendChild(divElement);
  }
};
const loadPokedex = () => {
  showPokemon(arrPokemon);
  document.getElementById('getCandy').classList.add('ocultar');
  document.getElementById('powerData').classList.add('ocultar');
  document.getElementById('comparePokemon').classList.add('ocultar');
  document.getElementById('showDescription').classList.add('ocultar');
};
window.addEventListener('load', loadPokedex);
// boton pokedex
document.querySelector('#showPokedex').addEventListener('click', () => {
  document.getElementById('search').classList.remove('ocultar');
  document.getElementById('getCandy').classList.add('ocultar');
  document.getElementById('powerData').classList.add('ocultar');
  document.getElementById('comparePokemon').classList.add('ocultar');
  document.getElementById('showDescription').classList.add('ocultar');
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
          <a id="${arr[i].num}">
            <img src="${arr[i].img}">
            <p>N°${arr[i].num}</p>
            <p class="name">${arr[i].name}</p>
            <p class="km">${arr[i]['buddy-distance-km']} Km</p>
            <p class="type">${pokemonType(arr[i])}</p>
          </a>
        </div>`;
  }
  document.getElementById('pokemonList2').innerHTML = pokList2;
};
// boton ganar caramelos
document.querySelector('#showGetCandy').addEventListener('click', () => {
  document.getElementById('search').classList.add('ocultar');
  document.getElementById('pokedex').classList.add('ocultar');
  document.getElementById('powerData').classList.add('ocultar');
  document.getElementById('comparePokemon').classList.add('ocultar');
  document.getElementById('showDescription').classList.add('ocultar');
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
// --------------------------------------------------------------------------------
// boton comparar pokemones
document.querySelector('#showComparePokemon').addEventListener('click', () => {
  document.getElementById('search').classList.add('ocultar');
  document.getElementById('getCandy').classList.add('ocultar');
  document.getElementById('pokedex').classList.add('ocultar');
  document.getElementById('powerData').classList.add('ocultar');
  document.getElementById('showDescription').classList.add('ocultar');
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
    <div class="conteinerPokemon">
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
    <th>Movimiento</th>
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
    <div class="conteinerPokemon">
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
    <th>Movimiento</th>
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
  document.getElementById('table1Pokemon1').innerHTML = '';
  document.getElementById('table2Pokemon1').innerHTML = '';
  document.getElementById('table1Pokemon2').innerHTML = '';
  document.getElementById('table2Pokemon2').innerHTML = '';
  const inputNameSelect1 = document.getElementById('searchPokemon1').value.toLowerCase();
  const inputNameSelect2 = document.getElementById('searchPokemon2').value.toLowerCase();
  showComparePokemon(comparePokemon(arrPokemon, inputNameSelect1));
  showCompareTableMove(comparePokemon(arrPokemon, inputNameSelect1));
  showCompareTableAttack(comparePokemon(arrPokemon, inputNameSelect1));
  showComparePokemon2(comparePokemon(arrPokemon, inputNameSelect2));
  showCompareTableMove2(comparePokemon(arrPokemon, inputNameSelect2));
  showCompareTableAttack2(comparePokemon(arrPokemon, inputNameSelect2));
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
// Boton datos de poder en Navegador
document.querySelector('#showPowerData').addEventListener('click', () => {
  document.getElementById('search').classList.add('ocultar');
  document.getElementById('pokedex').classList.add('ocultar');
  document.getElementById('getCandy').classList.add('ocultar');
  document.getElementById('comparePokemon').classList.add('ocultar');
  document.getElementById('showDescription').classList.add('ocultar');
  document.getElementById('powerData').classList.remove('ocultar');
  dataPower(sortPower(arrPokemon, 'atack'), 'atack');
});
// Desplegable de datos de poder
const sortPowerArray = document.querySelector('#sortPower');
sortPowerArray.addEventListener('change', () => {
  const powerSelect = sortPowerArray.value;
  document.getElementById('powerTable').innerHTML = '';
  dataPower(sortPower(arrPokemon, powerSelect), powerSelect);
});
// --------------------------------------------------------------------------------
// Buscador
// evento keyup se dispara cuando se suelta una tecla
const search = document.getElementById('search');
search.addEventListener('keyup', () => {
  const inputText = search.value.toLowerCase();
  showPokemon(searchPokemon(arrPokemon, inputText));
  if (document.getElementById('pokemonList') === '') {
    pokemonList.innerHTML = '<h1>Pokemon no encontrado<h1>';
  }
  if (search.value !== '') {
    document.getElementById('showListpokemon').innerHTML = '';
    for (let i = 0; i < searchPokemon(arrPokemon, inputText).length; i += 1) {
      document.getElementById('showListpokemon').innerHTML += `
        <li class="li">${searchPokemon(arrPokemon, inputText)[i].name}</li>
        `;
    }
  }
  if (search.value === '') {
    document.getElementById('showListpokemon').innerHTML = '';
  }
});
