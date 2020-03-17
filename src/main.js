// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
const arrPokemon = data.pokemon;

//definición de la función
const recorrerArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    document.getElementById('PokeAsc').innerHTML += `
    <div class="contenedor">
      <img src="${arr[i].img}">
      <p>N°${arr[i].num}</p>
      <p>${arr[i].name}</p>
      <p>${arr[i].type}</p>
    </div>`;
  }
};

const ordenarArra = (arr) => {

}

const mostrarData = () => {
  document.getElementById('PokeDes').classList.add('ocultar');
  document.getElementById('PokeAsc').classList.remove('ocultar');
  document.getElementById('PokeAsc').value = "";
  // data.pokemon.forEach(recorrerArray2);
  //invocando a la función
  recorrerArray(arrPokemon);
};
// const recorrerArray = (pokemon) => {
//   document.getElementById('demo').innerHTML += `
//   <div class="contenedor">
//     <img src="${pokemon.img}">
//     <p>N°${pokemon.num}</p>
//     <p>${pokemon.name}</p>
//     <p>${pokemon.type}</p>
//   </div>`;
//   console.log('1');
// };
// // data.pokemon.forEach(recorrerArray);
// const reccorer = () => {
//   document.getElementById('demo1').classList.add('ocultar');
//   document.getElementById('demo').classList.remove('ocultar');
//   data.pokemon.forEach(recorrerArray);
// };
document.getElementById('men').addEventListener('click', mostrarData);
document.getElementById('may').addEventListener('click', () => {
  recorrerArray(ordenarArray(arrPokemon));
})
// menor a mayor
// mayor a menor
const recorrerArray2 = (pkm) => {
  const sortNumDesc = (poke) => {
    let arrPokemonesNumDesc = [];
    arrPokemonesNumDesc = poke.sort((a, b) => {
      return b.num - a.num;
    });
    return arrPokemonesNumDesc;
    console.log(arrPokemonesNumDesc);
  };
  let nuevoA = [];
  nuevoA = sortNumDesc(pkm);
  for (let i = 0; i < data.pokemon.length; i++) {
    document.getElementById('PokeDes').innerHTML += `
  <div class="contenedor">
    <img src="${nuevoA[i].img}">
    <p>N°${nuevoA[i].num}</p>
    <p>${nuevoA[i].name}</p>
    <p>${nuevoA[i].type}</p>
  </div>`;
  }
};
const recorrer2 = () => {
  document.getElementById('PokeAsc').classList.add('ocultar');
  document.getElementById('PokeDes').classList.remove('ocultar');
  document.getElementById('PokeDes').value = "";
  // data.pokemon.forEach(recorrerArray2);
  recorrerArray2(pokemon);
};
// document.getElementById("demo").classList.add("ocultar");
// document.getElementById("demo1").classList.remove("ocultar");
document.getElementById('may').addEventListener('click', recorrer2); // mayor a menor
document.getElementById('az');
document.getElementById('za');