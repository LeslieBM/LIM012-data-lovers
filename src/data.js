// estas funciones son de ejemplo
export const sortNumAsc = (pokemon) => {
  document.getElementById('demo').innerHTML += `
    <div class="contenedor">
      <img src="${pokemon.img}">
      <p>N°${pokemon.num}</p>
      <p>${pokemon.name}</p>
      <p>${pokemon.type}</p>
    </div>`;
};
export const sortNumDesc = (pokemon) => {
  let arrPokemonesNumDesc = [];
  arrPokemonesNumDesc = pokemon.sort((a, b) => {
    return b.num - a.num;
  });
  document.getElementById('demo1').innerHTML += `
    <div class="contenedor">
      <img src="${arrPokemonesNumDesc.img}">
      <p>N°${arrPokemonesNumDesc.num}</p>
      <p>${arrPokemonesNumDesc.name}</p>
      <p>${arrPokemonesNumDesc.type}</p>
    </div>`;
};
