import {
  ordenarArrayAsc, ordenarArrayDes, ordenarArrayAz, ordenarArrayZa,
} from '../src/data.js';

const inputOrder = [{
  num: '001',
  name: 'bulbasaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
  type: [
    'grass',
    'poison'],
},
{
  num: '002',
  name: 'ivysaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/002.png',
  type: [
    'grass',
    'poison'],
},
{
  num: '003',
  name: 'venusaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/003.png',
  type: [
    'grass',
    'poison'],
},
{
  num: '004',
  name: 'charmander',
  img: 'https://www.serebii.net/pokemongo/pokemon/004.png',
  type: [
    'fire'],
},
];
const outputOrderAsc = [{
  num: '001',
  name: 'bulbasaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
  type: [
    'grass',
    'poison'],
},
{
  num: '002',
  name: 'ivysaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/002.png',
  type: [
    'grass',
    'poison'],
},
{
  num: '003',
  name: 'venusaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/003.png',
  type: [
    'grass',
    'poison'],
},
{
  num: '004',
  name: 'charmander',
  img: 'https://www.serebii.net/pokemongo/pokemon/004.png',
  type: [
    'fire'],
},
];
const outputOrderDes = [{
  num: '004',
  name: 'charmander',
  img: 'https://www.serebii.net/pokemongo/pokemon/004.png',
  type: [
    'fire'],
},
{
  num: '003',
  name: 'venusaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/003.png',
  type: [
    'grass',
    'poison'],
},
{
  num: '002',
  name: 'ivysaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/002.png',
  type: [
    'grass',
    'poison'],
},
{
  num: '001',
  name: 'bulbasaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
  type: [
    'grass',
    'poison'],
},
];
const outputOrderAz = [{
  num: '001',
  name: 'bulbasaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
  type: [
    'grass',
    'poison'],
},
{
  num: '004',
  name: 'charmander',
  img: 'https://www.serebii.net/pokemongo/pokemon/004.png',
  type: [
    'fire'],
},
{
  num: '002',
  name: 'ivysaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/002.png',
  type: [
    'grass',
    'poison'],
},
{
  num: '003',
  name: 'venusaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/003.png',
  type: [
    'grass',
    'poison'],
},
];
const outputOrderZa = [{
  num: '003',
  name: 'venusaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/003.png',
  type: [
    'grass',
    'poison'],
},
{
  num: '002',
  name: 'ivysaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/002.png',
  type: [
    'grass',
    'poison'],
},
{
  num: '004',
  name: 'charmander',
  img: 'https://www.serebii.net/pokemongo/pokemon/004.png',
  type: [
    'fire'],
},
{
  num: '001',
  name: 'bulbasaur',
  img: 'https://www.serebii.net/pokemongo/pokemon/001.png',
  type: [
    'grass',
    'poison'],
},
];
describe('ordenado Ascendente', () => {
  it('is a function', () => {
    expect(typeof ordenarArrayAsc).toBe('function');
  });
  it('ordenarAsc', () => {
    expect(ordenarArrayAsc(inputOrder)).toEqual(outputOrderAsc);
  });
});
describe('ordenado Descendente', () => {
  it('is a function', () => {
    expect(typeof ordenarArrayDes).toBe('function');
  });
  it('ordenarDes', () => {
    expect(ordenarArrayDes(inputOrder)).toEqual(outputOrderDes);
  });
});
describe('ordenado de Az', () => {
  it('is a function', () => {
    expect(typeof ordenarArrayAz).toBe('function');
  });
  it('ordenarDes', () => {
    expect(ordenarArrayAz(inputOrder)).toEqual(outputOrderAz);
  });
});
describe('ordenado de Za', () => {
  it('is a function', () => {
    expect(typeof ordenarArrayZa).toBe('function');
  });
  it('ordenarDes', () => {
    expect(ordenarArrayZa(inputOrder)).toEqual(outputOrderZa);
  });
});
