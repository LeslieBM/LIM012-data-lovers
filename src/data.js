export const sortArrayAsc = (arr) => {
  let arrPokemonesNumAsc = [];
  arrPokemonesNumAsc = arr.sort((a, b) => a.num - b.num);
  return arrPokemonesNumAsc;
};
export const sortArrayDes = (arr) => {
  let arrPokemonesNumDesc = [];
  arrPokemonesNumDesc = arr.sort((a, b) => b.num - a.num);
  return arrPokemonesNumDesc;
};
export const sortArrayAz = (arr) => {
  let arrPokemonesAz = [];
  arrPokemonesAz = arr.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } return -1;
  });
  return arrPokemonesAz;
};
export const sortArrayZa = (arr) => {
  let arrPokemonesZa = [];
  arrPokemonesZa = arr.sort((a, b) => {
    if (b.name > a.name) {
      return 1;
    } return -1;
  });
  return arrPokemonesZa;
};
// filtrar por km
export const filterOneKm = (arr) => {
  const arrFiltradoKM = arr.filter(object => object['buddy-distance-km'] === '1');
  return arrFiltradoKM;
};
export const filterthreeKm = (arr) => {
  const arrFiltradoKM = arr.filter(object => object['buddy-distance-km'] === '3');
  return arrFiltradoKM;
};
export const filterFiveKm = (arr) => {
  const arrFiltradoKM = arr.filter(object => object['buddy-distance-km'] === '5');
  return arrFiltradoKM;
};
export const filterTwentyKm = (arr) => {
  const arrFiltradoKM = arr.filter(object => object['buddy-distance-km'] === '20');
  return arrFiltradoKM;
};
export const sortAtack = (arr) => {
  let arrPokemonesNumAsc = [];
  arrPokemonesNumAsc = arr.sort((a, b) => b.stats['base-attack'] - a.stats['base-attack']);
  return arrPokemonesNumAsc;
};
export const sortDefense = (arr) => {
  let arrPokemonesNumAsc = [];
  arrPokemonesNumAsc = arr.sort((a, b) => b.stats['base-defense'] - a.stats['base-defense']);
  return arrPokemonesNumAsc;
};
export const sortHealth = (arr) => {
  let arrPokemonesNumAsc = [];
  arrPokemonesNumAsc = arr.sort((a, b) => b.stats['base-stamina'] - a.stats['base-stamina']);
  return arrPokemonesNumAsc;
};
export const sortMaxCp = (arr) => {
  let arrPokemonesNumAsc = [];
  arrPokemonesNumAsc = arr.sort((a, b) => b.stats['max-cp'] - a.stats['max-cp']);
  return arrPokemonesNumAsc;
};
export const sortMaxHp = (arr) => {
  let arrPokemonesNumAsc = [];
  arrPokemonesNumAsc = arr.sort((a, b) => b.stats['max-hp'] - a.stats['max-hp']);
  return arrPokemonesNumAsc;
};
