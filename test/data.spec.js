import {
  ordenarArrayAsc, ordenarArrayDes, ordenarArrayAz, ordenarArrayZa,
<<<<<<< HEAD
} from './src/data.js';
=======
} from '../src/data.js';
>>>>>>> origin

describe('ordenado Ascendente', () => {
  it('is a function', () => {
    expect(typeof ordenarArrayAsc).toBe('function');
  });
  test('ordenar', () => {
    expect(ordenarArrayAsc()).toBe();
  });
});
describe('ordenado Descendente', () => {
  it('is a function', () => {
    expect(typeof ordenarArrayDes).toBe('function');
  });
});
describe('ordenado de Az', () => {
  it('is a function', () => {
    expect(typeof ordenarArrayAz).toBe('function');
  });
});
describe('ordenado de Za', () => {
  it('is a function', () => {
    expect(typeof ordenarArrayZa).toBe('function');
  });
});
//---------------------------------------
// import { example, anotherExample } from '../src/data.js';
// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });
//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });
// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });
//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
