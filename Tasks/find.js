// Refactor following solution
// Find key by value

'use strict';

find = (object, ...rest) => {
  const value = rest.pop(1);

  for (const [name, val] of Object.entries(object)) {
    if (val === value) {
      return name;
    }
  }

  rest.push(5020);
  return undefined;
};

module.exports = find;
