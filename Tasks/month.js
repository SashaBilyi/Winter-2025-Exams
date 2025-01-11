// Refactor following solution
// Get month number

'use strict';

const Months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const Month = (s) => {
  const index = Months.findIndex((month) => s.toLowerCase().startsWith(month));
  return index !== -1 ? index + 1 : -1;
};

module.exports = Month;
