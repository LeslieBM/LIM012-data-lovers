// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
const arrPokemon = data.pokemon;

// Definición de la función
const recorrerArray = (arr) => {
  for (let i = 0; i < arr.length; i++){
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
  let arrPokemonesNumAsc = [];
  arrPokemonesNumAsc = arr.sort((a, b) => {
    return a.num - b.num;
  });
  return arrPokemonesNumAsc;
};
const ordenarArrayDes = (arr) => {
  let arrPokemonesNumDesc = [];
  arrPokemonesNumDesc = arr.sort((a, b) => {
    return b.num - a.num;
  });
  return arrPokemonesNumDesc;
};
const ordenarArrayAz = (arr) => {
  let arrPokemonesAz = [];
  arrPokemonesAz = arr.sort((a,b) =>{
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
  return arrPokemonesAz;
};
const ordenarArrayZa = (arr) => {
  let arrPokemonesZa = [];
  arrPokemonesZa = arr.sort((a,b) =>{
    if (b.name > a.name) {
      return 1;
    } else {
      return -1;
    }
  });
  return arrPokemonesZa;
};
document.getElementById('men').addEventListener('click', () => {
  document.getElementById('MostarPokemones').innerHTML = '';
  recorrerArray(ordenarArrayAsc(arrPokemon));
});
document.getElementById('may').addEventListener('click', () => {
  document.getElementById('MostarPokemones').innerHTML = '';
  recorrerArray(ordenarArrayDes(arrPokemon));
});
document.getElementById('az').addEventListener('click', () => {
  document.getElementById('MostarPokemones').innerHTML = '';
  recorrerArray(ordenarArrayAz(arrPokemon));
});
document.getElementById('za').addEventListener('click', () => {
  document.getElementById('MostarPokemones').innerHTML = '';
  recorrerArray(ordenarArrayZa(arrPokemon));
});