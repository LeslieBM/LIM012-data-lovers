// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
const pokemon = data.pokemon;

const recorrerArray = (pokemon) => {
  document.getElementById('demo').innerHTML += `
  <div class="contenedor">
    <img src="${pokemon.img}">
    <p>N°${pokemon.num}</p>
    <p>${pokemon.name}</p>
    <p>${pokemon.type}</p>
  </div>`;
  const sortNumAsc = (pkm) => {
    console.log('3.0');
    let arrPokemonesNumDesc = [];
    arrPokemonesNumDesc = pkm.sort((a, b) => {
      return a.num - b.num;
    });
    return arrPokemonesNumDesc;
  };
  console.log('1');
};
const reccorer = () => {
  document.getElementById('demo1').classList.add('ocultar');
  document.getElementById('demo').classList.remove('ocultar');
  data.pokemon.forEach(recorrerArray);
  console.log('2');
};
document.getElementById('men').addEventListener('click', reccorer);// menor a mayor
// mayor a menor
// const sortNumAsc = (pkm) => {
//   console.log('3.0');
//   let arrPokemonesNumDesc = [];
//   arrPokemonesNumDesc = pkm.sort((a, b) => {
//     return a.num - b.num;
//   });
//   return arrPokemonesNumDesc;
// };
const sortNumDesc = (pkm) => {
  console.log('3');
  let arrPokemonesNumDesc = [];
  arrPokemonesNumDesc = pkm.sort((a, b) => {
    return b.num - a.num;
  });
  return arrPokemonesNumDesc;
};
const recorrerArray2 = (pkm) => {
  document.getElementById('demo1').innerHTML += `
  <div class="contenedor">
    <img src="${pkm.img}">
    <p>N°${pkm.num}</p>
    <p>${pkm.name}</p>
    <p>${pkm.type}</p>
  </div>`;
  console.log('4');
};
const reccorer2 = () => {
  document.getElementById('demo').classList.add('ocultar');
  document.getElementById('demo1').classList.remove('ocultar');
  pokemon.forEach(sortNumDesc(pokemon));
  console.log('5');
};
// document.getElementById("demo").classList.add("ocultar");
// document.getElementById("demo1").classList.remove("ocultar");
// document.getElementById("demo1").innerHTML += '<div class="contenedor"><div>'+pokemon.num + '</div><div>' + pokemon.name + '</div><br><img src="'+pokemon.img+'">'+'<p>'+pokemon.type+'</p></div>';
document.getElementById('may').addEventListener('click', sortNumDesc(pokemon)); // mayor a menor
document.getElementById('az');
document.getElementById('za');