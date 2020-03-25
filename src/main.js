import {
  ordenarArrayAsc, ordenarArrayDes, ordenarArrayAz, ordenarArrayZa, filterOneKm, filterThreeKm,
  filterFiveKm, filterTwentyKm,}
} from './data.js';
import data from './data/pokemon/pokemon.js';

document.getElementById('getCandy').classList.add('ocultar');
const arrPokemon = data.pokemon;
const showPokemon = (arr) => {
  let pokList = '';
  for (let i = 0; i < arr.length; i += 1) {
    pokList += `
      <div class="conteinerPokemon">
        <img src="${arr[i].img}">
        <p>N°${arr[i].num}</p>
        <p>${arr[i].name}</p>
        <p>${arr[i].type}</p>
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
        <p>${arr[i].name}</p>
        <p>${arr[i].type}</p>
      </div>`;
  }
  document.getElementById('pokemonList2').innerHTML = pokList2;
};
// Mostrar Pokemones
const cargar = () => {
  showPokemon(arrPokemon);
};
window.addEventListener('load', cargar, false);
const cargar2 = () => {
  showPokemon2(arrPokemon);
};
window.addEventListener('load', cargar2, false);

// Ordenar Pokemones
document.querySelector('#showPokedex').addEventListener('click', () => {
  document.getElementById('getCandy').classList.add('ocultar');
  document.addEventListener()
  document.getElementById('pokedex').classList.remove('ocultar');
  
});
document.querySelector('#showGetCandy').addEventListener('click', () => {
  document.getElementById('pokedex').classList.add('ocultar');
  document.getElementById('getCandy').classList.remove('ocultar');
});
document.querySelector('#upward').addEventListener('click', () => {
  document.getElementById('pokemonList').innerHTML = '';
  showPokemon(ordenarArrayAsc(arrPokemon));
});
document.querySelector('#falling').addEventListener('click', () => {
  document.getElementById('pokemonList').innerHTML = '';
  showPokemon(ordenarArrayDes(arrPokemon));
});
document.querySelector('#sortAz').addEventListener('click', () => {
  document.getElementById('pokemonList').innerHTML = '';
  showPokemon(ordenarArrayAz(arrPokemon));
});
document.querySelector('#sortZa').addEventListener('click', () => {
  document.getElementById('pokemonList').innerHTML = '';
  showPokemon(ordenarArrayZa(arrPokemon));
});
// Filtrar Pokemones
document.querySelector('#oneKm').addEventListener('click', () => {
  document.getElementById('pokemonList2').innerHTML = '';
  const totalKm = filterOneKm(arrPokemon).length;
  document.getElementById('totalPokemon').innerHTML = `N° de Pokemones: ${totalKm}`;
  showPokemon2(filterOneKm(arrPokemon));
});
document.querySelector('#threeKm').addEventListener('click', () => {
  document.getElementById('pokemonList2').innerHTML = '';
  const totalKm = filterThreeKm(arrPokemon).length;
  document.getElementById('totalPokemon').innerHTML = `N° de Pokemones: ${totalKm}`;
  showPokemon2(filterThreeKm(arrPokemon));
});
document.querySelector('#fiveKm').addEventListener('click', () => {
  document.getElementById('pokemonList2').innerHTML = '';
  const totalKm = filterFiveKm(arrPokemon).length;
  document.getElementById('totalPokemon').innerHTML = `N° de Pokemones: ${totalKm}`;
  showPokemon2(filterFiveKm(arrPokemon));
});
