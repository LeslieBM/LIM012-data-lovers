import {
  sortArrayAsc, sortArrayDes, sortArrayAz, sortArrayZa,
  filterOneKm, filterthreeKm, filterFiveKm, filterTwentyKm,
  sortAtack, sortDefense, sortHealth, sortMaxCp, sortMaxHp,
} from './data.js';
import data from './data/pokemon/pokemon.js';

document.getElementById('getCandy').classList.add('ocultar');
document.getElementById('powerData').classList.add('ocultar');
const arrPokemon = data.pokemon;
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
const showPokemon2 = (arr) => {
  let pokList2 = '';
  for (let i = 0; i < arr.length; i += 1) {
    pokList2 += `
      <div class="conteinerPokemon">
        <img src="${arr[i].img}">
        <p>N°${arr[i].num}</p>
        <p class="name">${arr[i].name}</p>
        <p class="type">${arr[i].type}</p>
        <p class="km">${arr[i]['buddy-distance-km']} Km</p>
      </div>`;
  }
  document.getElementById('pokemonList2').innerHTML = pokList2;
};

// Definición de la función
const cargar = () => {
  showPokemon(arrPokemon);
};
window.addEventListener('load', cargar, false);

document.querySelector('#showPokedex').addEventListener('click', () => {
  document.getElementById('getCandy').classList.add('ocultar');
  document.getElementById('powerData').classList.add('ocultar');
  document.getElementById('pokedex').classList.remove('ocultar');
  showPokemon(sortArrayAsc(arrPokemon));
});
document.querySelector('#showGetCandy').addEventListener('click', () => {
  document.getElementById('pokedex').classList.add('ocultar');
  document.getElementById('powerData').classList.add('ocultar');
  document.getElementById('getCandy').classList.remove('ocultar');
  showPokemon2(arrPokemon);
});
document.querySelector('#showPowerData').addEventListener('click', () => {
  document.getElementById('getCandy').classList.add('ocultar');
  document.getElementById('pokedex').classList.add('ocultar');
  document.getElementById('powerData').classList.remove('ocultar');
});
document.querySelector('#upward').addEventListener('click', () => {
  document.getElementById('pokemonList').innerHTML = '';
  showPokemon(sortArrayAsc(arrPokemon));
});
document.querySelector('#falling').addEventListener('click', () => {
  document.getElementById('pokemonList').innerHTML = '';
  showPokemon(sortArrayDes(arrPokemon));
});
document.querySelector('#sortAz').addEventListener('click', () => {
  document.getElementById('pokemonList').innerHTML = '';
  showPokemon(sortArrayAz(arrPokemon));
});
document.querySelector('#sortZa').addEventListener('click', () => {
  document.getElementById('pokemonList').innerHTML = '';
  showPokemon(sortArrayZa(arrPokemon));
});
// filtrar por km
document.querySelector('#oneKm').addEventListener('click', () => {
  document.getElementById('total').innerHTML = '';
  document.getElementById('pokemonList2').innerHTML = '';
  const totalKm = filterOneKm(arrPokemon).length;
  document.getElementById('total').innerHTML = `N° pokemones de 1KM: ${totalKm}`;
  showPokemon2(filterOneKm(arrPokemon));
});
document.querySelector('#threeKm').addEventListener('click', () => {
  document.getElementById('total').innerHTML = '';
  document.getElementById('pokemonList2').innerHTML = '';
  const totalKm = filterthreeKm(arrPokemon).length;
  document.getElementById('total').innerHTML = `N° pokemones de 3KM: ${totalKm}`;
  showPokemon2(filterthreeKm(arrPokemon));
});
document.querySelector('#fiveKm').addEventListener('click', () => {
  document.getElementById('total').innerHTML = '';
  document.getElementById('pokemonList2').innerHTML = '';
  const totalKm = filterFiveKm(arrPokemon).length;
  document.getElementById('total').innerHTML = `N° pokemones de 5KM: ${totalKm}`;
  showPokemon2(filterFiveKm(arrPokemon));
});
document.querySelector('#twentyKm').addEventListener('click', () => {
  document.getElementById('total').innerHTML = '';
  document.getElementById('pokemonList2').innerHTML = '';
  const totalKm = filterTwentyKm(arrPokemon).length;
  document.getElementById('total').innerHTML = `N°de pokemones de 20KM: ${totalKm}`;
  showPokemon2(filterTwentyKm(arrPokemon));
});
// Datos de poder
// ---------------------
const datos = (arr) => {
  let pokList = '';
  pokList += `
    <tr>
      <th>N° Pokedex</th>
      <th>Nombre</th>
      <th>Ataque</th>
    </tr>`;
  for (let i = 0; i < arr.length; i += 1) {
    pokList += `
    <tr>
      <td>${arr[i].num}</td>
      <td>${arr[i].name}</td>
      <td>${arr[i].stats['base-attack']}</td>
    </tr>`;
  }
  document.getElementById('powerTable').innerHTML = pokList;
};
const datos1 = (arr) => {
  let pokList = '';
  pokList += `
    <tr>
      <th>N° Pokedex</th>
      <th>Nombre</th>
      <th>Defensa</th>
    </tr>`;
  for (let i = 0; i < arr.length; i += 1) {
    pokList += `
      <tr>
        <td>${arr[i].num}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].stats['base-defense']}</td>
      </tr>`;
  }
  document.getElementById('powerTable').innerHTML = pokList;
};
const datos2 = (arr) => {
  let pokList = '';
  pokList += `
    <tr>
      <th>N° Pokedex</th>
      <th>Nombre</th>
      <th>Salud</th>
    </tr>`;
  for (let i = 0; i < arr.length; i += 1) {
    pokList += `
      <tr>
        <td>${arr[i].num}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].stats['base-stamina']}</td>
      </tr>`;
  }
  document.getElementById('powerTable').innerHTML = pokList;
};
const datos3 = (arr) => {
  let pokList = '';
  pokList += `
    <tr>
      <th>N° Pokedex</th>
      <th>Nombre</th>
      <th>Max. CP</th>
    </tr>`;
  for (let i = 0; i < arr.length; i += 1) {
    pokList += `
      <tr>
        <td>${arr[i].num}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].stats['max-cp']}</td>
      </tr>`;
  }
  document.getElementById('powerTable').innerHTML = pokList;
};
const datos4 = (arr) => {
  let pokList = '';
  pokList += `
    <tr>
      <th>N° Pokedex</th>
      <th>Nombre</th>
      <th>Max. HP</th>
    </tr>`;
  for (let i = 0; i < arr.length; i += 1) {
    pokList += `
      <tr>
        <td>${arr[i].num}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].stats['max-hp']}</td>
      </tr>`;
  }
  document.getElementById('powerTable').innerHTML = pokList;
};
document.querySelector('#showPowerData').addEventListener('click', () => {
  document.getElementById('pokedex').classList.add('ocultar');
  document.getElementById('getCandy').classList.add('ocultar');
  document.getElementById('powerData').classList.remove('ocultar');
  document.getElementById('powerTable').innerHTML = '';
  datos(sortAtack(arrPokemon));
});
// Botones
document.querySelector('#atack').addEventListener('click', () => {
  document.getElementById('powerTable').innerHTML = '';
  datos(sortAtack(arrPokemon));
});
document.querySelector('#defense').addEventListener('click', () => {
  document.getElementById('powerTable').innerHTML = '';
  datos1(sortDefense(arrPokemon));
});
document.querySelector('#health').addEventListener('click', () => {
  document.getElementById('powerTable').innerHTML = '';
  datos2(sortHealth(arrPokemon));
});
document.querySelector('#maxCp').addEventListener('click', () => {
  document.getElementById('powerTable').innerHTML = '';
  datos3(sortMaxCp(arrPokemon));
});
document.querySelector('#maxHp').addEventListener('click', () => {
  document.getElementById('powerTable').innerHTML = '';
  datos4(sortMaxHp(arrPokemon));
});
