import { example } from './data.js';
import data from './data/pokemon/pokemon.js';
console.log(example, data);

/*const recorrerArrayA = (pokemon, index) =>{
    for (let i=pokemon.length - 1; i >= 0; i--) {
        console.log(i);
        //document.getElementById("demo1").innerHTML += '<div class="contenedor"><div>'+pokemon.num[i] + '</div><div>' + pokemon.name[i] + '</div><br><img src="'+pokemon.img[i]+'">'+'<p>'+pokemon.type[i]+'</p></div>';
    }
};
let recorrer2 = () =>{
    for (let i=pokemon.length - 1; i >= 0; i--) {
        console.log(i);
        //document.getElementById("demo1").innerHTML += '<div class="contenedor"><div>'+pokemon.num[i] + '</div><div>' + pokemon.name[i] + '</div><br><img src="'+pokemon.img[i]+'">'+'<p>'+pokemon.type[i]+'</p></div>';
    }
    document.getElementById("demo").classList.add("ocultar");
    document.getElementById("demo1").classList.remove("ocultar");
}*/
function sortNumDesc(pokemon) {
    let arrPokemonesNumDesc = pokemon;
    arrPokemonesNumDesc = arrPokemonesNumDesc.sort((a, b) => {
      if (parseInt(a.num) < parseInt(b.num))
        return 1
      else
        return -1
    })
    return arrPokemonesNumDesc
  }
  
document.getElementById("may").addEventListener("click", recorrer2);//mayor a menor

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