import {
  sortArray, filterKm, sortPower, comparePokemon, searchPokemon,
} from '../src/data.js';

const inputOrder = [{ num: '002', name: 'ivysaur' }, { num: '003', name: 'venusaur' }, { num: '001', name: 'bulbasaur' }];
const outputOrderAsc = [{ num: '001', name: 'bulbasaur' }, { num: '002', name: 'ivysaur' }, { num: '003', name: 'venusaur' }];
const outputOrderDes = [{ num: '003', name: 'venusaur' }, { num: '002', name: 'ivysaur' }, { num: '001', name: 'bulbasaur' }];
const outputOrderAz = [{ num: '001', name: 'bulbasaur' }, { num: '002', name: 'ivysaur' }, { num: '003', name: 'venusaur' }];
const outputOrderZa = [{ num: '003', name: 'venusaur' }, { num: '002', name: 'ivysaur' }, { num: '001', name: 'bulbasaur' }];

describe('ordenado Numericamente y alfabeticamente', () => {
  it('is a function', () => {
    expect(typeof sortArray).toBe('function');
  });
  it('ordenarNumAsc', () => {
    expect(sortArray(inputOrder, 'upward')).toEqual(outputOrderAsc);
  });
  it('ordenarNumDes', () => {
    expect(sortArray(inputOrder, 'falling')).toEqual(outputOrderDes);
  });
  it('ordenarNameAsc', () => {
    expect(sortArray(inputOrder, 'sortAz')).toEqual(outputOrderAz);
  });
  it('ordenarNameDes', () => {
    expect(sortArray(inputOrder, 'sortZa')).toEqual(outputOrderZa);
  });
});
const inputFilter = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
inputFilter[0]['buddy-distance-km'] = '1';
inputFilter[1]['buddy-distance-km'] = '1';
inputFilter[2]['buddy-distance-km'] = '1';
inputFilter[3]['buddy-distance-km'] = '3';
inputFilter[4]['buddy-distance-km'] = '3';
inputFilter[5]['buddy-distance-km'] = '3';
inputFilter[6]['buddy-distance-km'] = '5';
inputFilter[7]['buddy-distance-km'] = '5';
inputFilter[8]['buddy-distance-km'] = '5';
inputFilter[9]['buddy-distance-km'] = '20';
inputFilter[10]['buddy-distance-km'] = '20';
inputFilter[11]['buddy-distance-km'] = '20';

const outputfilterOneKm = [{}, {}, {}];
outputfilterOneKm[0]['buddy-distance-km'] = '1';
outputfilterOneKm[1]['buddy-distance-km'] = '1';
outputfilterOneKm[2]['buddy-distance-km'] = '1';

const outputfilterThreeKm = [{}, {}, {}];
outputfilterThreeKm[0]['buddy-distance-km'] = '3';
outputfilterThreeKm[1]['buddy-distance-km'] = '3';
outputfilterThreeKm[2]['buddy-distance-km'] = '3';

const outputfilterFiveKm = [{}, {}, {}];
outputfilterFiveKm[0]['buddy-distance-km'] = '5';
outputfilterFiveKm[1]['buddy-distance-km'] = '5';
outputfilterFiveKm[2]['buddy-distance-km'] = '5';

const outputfilterTwentyKm = [{}, {}, {}];
outputfilterTwentyKm[0]['buddy-distance-km'] = '20';
outputfilterTwentyKm[1]['buddy-distance-km'] = '20';
outputfilterTwentyKm[2]['buddy-distance-km'] = '20';

describe('filtrado por kilometro', () => {
  it('is a function', () => {
    expect(typeof filterKm).toBe('function');
  });
  it('filtrado 1km', () => {
    expect(filterKm(inputFilter, 'oneKm')).toEqual(outputfilterOneKm);
  });
  it('filtrado 3km', () => {
    expect(filterKm(inputFilter, 'threeKm')).toEqual(outputfilterThreeKm);
  });
  it('filtrado 5km', () => {
    expect(filterKm(inputFilter, 'fiveKm')).toEqual(outputfilterFiveKm);
  });
  it('filtrado 20km', () => {
    expect(filterKm(inputFilter, 'twentyKm')).toEqual(outputfilterTwentyKm);
  });
});

const inputSortAtack = [{ stats: { } }, { stats: { } }, { stats: { } }];
const inputSortDefense = [{ stats: { } }, { stats: { } }, { stats: { } }];
const inputSortHealth = [{ stats: { } }, { stats: { } }, { stats: { } }];
const inputSortMaxCp = [{ stats: { } }, { stats: { } }, { stats: { } }];
const inputSortMaxHp = [{ stats: { } }, { stats: { } }, { stats: { } }];
inputSortAtack[0].stats['base-attack'] = '118';
inputSortAtack[1].stats['base-attack'] = '198';
inputSortAtack[2].stats['base-attack'] = '151';
inputSortDefense[0].stats['base-defense'] = '111';
inputSortDefense[1].stats['base-defense'] = '143';
inputSortDefense[2].stats['base-defense'] = '189';
inputSortHealth[0].stats['base-stamina'] = '128';
inputSortHealth[1].stats['base-stamina'] = '155';
inputSortHealth[2].stats['base-stamina'] = '190';
inputSortMaxCp[0].stats['max-cp'] = '1115';
inputSortMaxCp[1].stats['max-cp'] = '1699';
inputSortMaxCp[2].stats['max-cp'] = '1720';
inputSortMaxHp[0].stats['max-hp'] = '113';
inputSortMaxHp[1].stats['max-hp'] = '134';
inputSortMaxHp[2].stats['max-hp'] = '169';

const outputsortAtack = [{ stats: { } }, { stats: { } }, { stats: { } }];
outputsortAtack[0].stats['base-attack'] = '198';
outputsortAtack[1].stats['base-attack'] = '151';
outputsortAtack[2].stats['base-attack'] = '118';

const outputsortDefense = [{ stats: { } }, { stats: { } }, { stats: { } }];
outputsortDefense[0].stats['base-defense'] = '189';
outputsortDefense[1].stats['base-defense'] = '143';
outputsortDefense[2].stats['base-defense'] = '111';

const outputsortHealth = [{ stats: { } }, { stats: { } }, { stats: { } }];
outputsortHealth[0].stats['base-stamina'] = '190';
outputsortHealth[1].stats['base-stamina'] = '155';
outputsortHealth[2].stats['base-stamina'] = '128';

const outputsortMaxCp = [{ stats: { } }, { stats: { } }, { stats: { } }];
outputsortMaxCp[0].stats['max-cp'] = '1720';
outputsortMaxCp[1].stats['max-cp'] = '1699';
outputsortMaxCp[2].stats['max-cp'] = '1115';

const outputsortMaxHp = [{ stats: { } }, { stats: { } }, { stats: { } }];
outputsortMaxHp[0].stats['max-hp'] = '169';
outputsortMaxHp[1].stats['max-hp'] = '134';
outputsortMaxHp[2].stats['max-hp'] = '113';

describe('ordenado por ataque', () => {
  it('is a function', () => {
    expect(typeof sortPower).toBe('function');
  });
  it('ordenar atack', () => {
    expect(sortPower(inputSortAtack, 'atack')).toEqual(outputsortAtack);
  });
  it('ordenar defense', () => {
    expect(sortPower(inputSortDefense, 'defense')).toEqual(outputsortDefense);
  });
  it('ordenar Health', () => {
    expect(sortPower(inputSortHealth, 'health')).toEqual(outputsortHealth);
  });
  it('ordenar Max Cp', () => {
    expect(sortPower(inputSortMaxCp, 'maxCp')).toEqual(outputsortMaxCp);
  });
  it('ordenar Max Hp', () => {
    expect(sortPower(inputSortMaxHp, 'maxHp')).toEqual(outputsortMaxHp);
  });
});
const inputSearchName = [{ name: 'bulbasaur' }, { name: 'ivysaur' }, { name: 'bayleef' }, { name: 'caterpie' }, { name: 'beedrill' }];
const outputcomparePokemon = [{ name: 'bulbasaur' }];
const outputsearchPokemon = [{ name: 'bulbasaur' }, { name: 'bayleef' }, { name: 'beedrill' }];
describe('Buscador por nombre', () => {
  it('is a function', () => {
    expect(typeof comparePokemon).toBe('function');
  });
  it('Buscador nombre', () => {
    expect(comparePokemon(inputSearchName, 'bulbasaur')).toEqual(outputcomparePokemon);
  });
});
describe('Buscador por nombre por coincidencia', () => {
  it('is a function', () => {
    expect(typeof searchPokemon).toBe('function');
  });
  it('buscador coincidencia nombre', () => {
    expect(searchPokemon(outputsearchPokemon, 'b')).toEqual(outputsearchPokemon);
  });
});
