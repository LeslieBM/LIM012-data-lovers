export const ordenarArrayAsc = (arr) => {
  let arrPokemonesNumAsc = [];
  arrPokemonesNumAsc = arr.sort((a, b) => a.num - b.num);
  return arrPokemonesNumAsc;
};
export const ordenarArrayDes = (arr) => {
  let arrPokemonesNumDesc = [];
  arrPokemonesNumDesc = arr.sort((a, b) => b.num - a.num);
  return arrPokemonesNumDesc;
};
export const ordenarArrayAz = (arr) => {
  let arrPokemonesAz = [];
  arrPokemonesAz = arr.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } return -1;
  });
  return arrPokemonesAz;
};
export const ordenarArrayZa = (arr) => {
  let arrPokemonesZa = [];
  arrPokemonesZa = arr.sort((a, b) => {
    if (b.name > a.name) {
      return 1;
    } return -1;
  });
  return arrPokemonesZa;
};
export const filterOneKm = (arr) => {
  const arrFiltradoKM = arr.filter(object => object['buddy-distance-km'] === '1');
  return arrFiltradoKM;
};
export const filterThreeKm = (arr) => {
  const arrFiltradoKM = arr.filter(object => object['buddy-distance-km'] === '3');
  return arrFiltradoKM;
};
export const filterFiveKm = (arr) => {
  const arrFiltradoKM = arr.filter(object => object['buddy-distance-km'] === '5');
  return arrFiltradoKM;
};
