// Refactor following solution
// Find key by value

'use strict';

const find = (object, ...rest) => {
  const value = rest.pop(1);
  return Object.keys(object).find((key) => object[key] === value) || undefined;
};

module.exports = find;
