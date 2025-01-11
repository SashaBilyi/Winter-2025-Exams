// Refactor following solution
// Sum all number values in dict

'use strict';

const count = (obj) =>
  Object.keys(obj).reduce(
    (sum, key) => (typeof obj[key] === 'number' ? sum + obj[key] : sum),
    0,
  );

module.exports = count;
