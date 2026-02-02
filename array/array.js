/**
 * array.js
 * Crea due array con numeri casuali
 */

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const makeArray = (length, min = 0, max = 100) =>
  Array.from({ length }, () => randInt(min, max));

// Esempio: due array con numeri casuali
const array1 = makeArray(10, 1, 50); // 10 numeri casuali tra 1 e 50
const array2 = makeArray(5, 0, 9); // 5 numeri casuali tra 0 e 9

console.log("array1:", array1);
console.log("array2:", array2);
e;
module.exports = { makeArray, randInt, array1, array2 };
