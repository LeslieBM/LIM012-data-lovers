// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
const arrPokemon = data.pokemon;

// Definición de la función
const recorrerArray = (arr) => {
  for (let i = 0; i < arr.length; i++ ) {
    document.getElementById('MostarPokemones').innerHTML += `
    <div class="contenedor">
      <img src="${arr[i].img}">
      <p>N°${arr[i].num}</p>
      <p>${arr[i].name}</p>
      <p>${arr[i].type}</p>
    </div>`;
  }
};
const ordenarArrayAsc = (arr) => {
  let arrPokemonesNumDesc = [];
  arrPokemonesNumDesc = arr.sort((a, b) => {
    return a.num - b.num;
  });
  return arrPokemonesNumDesc;
};
const ordenarArrayDes = (arr) => {
  let arrPokemonesNumDesc = [];
  arrPokemonesNumDesc = arr.sort((a, b) => {
    return b.num - a.num;
  });
  return arrPokemonesNumDesc;
};

document.getElementById('men').addEventListener('click', () =>{
  document.getElementById('MostarPokemones').innerHTML = '';
  recorrerArray(ordenarArrayAsc(arrPokemon));
});
document.getElementById('may').addEventListener('click', () => {
  document.getElementById('MostarPokemones').innerHTML = '';
  recorrerArray(ordenarArrayDes(arrPokemon));
});
document.getElementById('az');
document.getElementById('za');