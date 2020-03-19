export const ordenarArrayAsc = (arr) => {
<<<<<<< HEAD
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
=======
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
>>>>>>> d2b0644835884785891f70c17df963f884f15c42
