import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
console.log(example, data);

const recorrerArray = (pokemon, index) =>{
    document.getElementById("demo").innerHTML += '<div id="contenedor"><div>'+pokemon.num + '</div><div>' + pokemon.name + '</div><br><img src="'+pokemon.img+'">'+'<p>'+pokemon.type+'</p></div>';
} 
data.pokemon.forEach(recorrerArray);

