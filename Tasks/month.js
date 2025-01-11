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

const Month = (s) =>
  Months.findIndex((month) => s.toLowerCase().startsWith(month)) + 1 || -1;

module.exports = Month;
