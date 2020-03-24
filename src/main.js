import {
  ordenarArrayAsc, ordenarArrayDes, ordenarArrayAz, ordenarArrayZa, filtrarKM,
} from './data.js';
import data from './data/pokemon/pokemon.js';

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
//  Mostrar Pokenones
function cargar() {
  showPokemon(arrPokemon);
  // FILTRADO POR KM
  showPokemon(filtrarKM(arrPokemon));
  // console.log(filtrarKM(arrPokemon).length);
  // ordenarArrayAsc(arrPokemon).forEach(showPokemon);
}
window.addEventListener('load', cargar);
// Ordenar Pokemones
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
