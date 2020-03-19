import {
    ordenarArrayAsc, ordenarArrayDes, ordenarArrayAz, ordenarArrayZa,
  } from './data.js';
  import data from './data/pokemon/pokemon.js';
  
  const arrPokemon = data.pokemon;
  const recorrerArray = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
      document.getElementById('MostarPokemones').innerHTML += `
        <div class="contenedor">
          <img src="${arr[i].img}">
          <p>N°${arr[i].num}</p>
          <p>${arr[i].name}</p>
          <p>${arr[i].type}</p>
        </div>`;
    }
  };
  // Definición de la función
  function cargar() {
    recorrerArray(ordenarArrayAsc(arrPokemon));
    // ordenarArrayAsc(arrPokemon).forEach(recorrerArray);
  }
  window.addEventListener('load', cargar, false);
  
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

  