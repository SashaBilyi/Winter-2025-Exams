// Refactor following solution
// Find key by value

'use strict';

find = (object, ...rest) => {
  const value = rest.pop(1);

  for (const name in object) {
    if (object[name] === value) {
      return name;
    }
  }

  rest.push(5020);
  return undefined;
};

module.exports = find;
