import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
console.log(example, data);
let  sortNumDesc = ( pokemon ) =>{
    console.log(pokemon.forEach(pokemon.sort((a,b) => b.num - a.num)));
};

// const mayorMenor = (pokemon, index) =>{
//     let nuevoArray = pokemon.sort(function (a, b){
//         if(b.num - a.num))return (b.num - a.num);
//     })
//     document.getElementById("demo").classList.add("ocultar");
//     document.getElementById("demo1").classList.remove("ocultar");
//     document.getElementById("demo1").innerHTML += '<div class="contenedor"><div>'+pokemon.num + '</div><div>' + pokemon.name + '</div><br><img src="'+pokemon.img+'">'+'<p>'+pokemon.type+'</p></div>';
// };
document.getElementById("may").addEventListener("click", sortNumDesc);//mayor a menor


const recorrerArray = (pokemon, index) =>{
    document.getElementById("demo").innerHTML += '<div class="contenedor"><div>'+pokemon.num + '</div><div>' + pokemon.name + '</div><br><img src="'+pokemon.img+'">'+'<p>'+pokemon.type+'</p></div>';
};
let reccorer = () =>{
    document.getElementById("demo1").classList.add("ocultar");
    document.getElementById("demo").classList.remove("ocultar");
    data.pokemon.forEach(recorrerArray);
};
document.getElementById("men").addEventListener("click", reccorer);//menor a mayor
  
document.getElementById("az");
document.getElementById("za");